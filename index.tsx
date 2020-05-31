import ExpeditionTable from "./components/exptable/exptable";

import "./index.less";

class IndexMain extends React.Component
{
  state:{
    data:ExpeditionData[]
  }

  constructor(props:any)
  {
    super(props);

    this.state={
      data:[]
    };
  }

  async componentDidMount()
  {
    this.setState({
      data:await getExpData()
    });
  }

  render()
  {
    return <>
      <ExpeditionTable data={this.state.data}/>
    </>;
  }
}

function main()
{
    ReactDOM.render(<IndexMain/>,document.querySelector(".main"));
}

// get expedition data from data file
function getExpData():Promise<ExpeditionData[]>
{
    return new Promise((resolve)=>{
        var xhr=new XMLHttpRequest();
        xhr.open("GET","data/expeditiondata.csv");

        xhr.onreadystatechange=()=>{
            if (xhr.readyState==4)
            {
                resolve(fixRawExpeditionData(Papa.parse(xhr.response,{
                    header:true
                }).data));
            }
        };

        xhr.send();
    });
}

// given raw expedition data, fix strings to floats and calculate
// total field
function fixRawExpeditionData(data:RawExpeditionData[]):ExpeditionData[]
{
    return _.map(data,(x:RawExpeditionData):ExpeditionData=>{
        var expdata:ExpeditionData={
            name:x.name,
            gas:parseFloat(x.gas),
            ammo:parseFloat(x.ammo),
            mre:parseFloat(x.mre),
            parts:parseFloat(x.parts),
            doll:parseFloat(x.doll),
            equip:parseFloat(x.equip)
        };

        expdata.total=expdata.gas+expdata.ammo+expdata.mre
            +expdata.parts+expdata.doll+expdata.equip;

        return expdata;
    });
}

window.onload=main;