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
            gas:_.round(parseFloat(x.gas),2),
            ammo:_.round(parseFloat(x.ammo),2),
            mre:_.round(parseFloat(x.mre),2),
            parts:_.round(parseFloat(x.parts),2),
            doll:_.round(parseFloat(x.doll),2),
            equip:_.round(parseFloat(x.equip),2)
        };

        expdata.total=_.round(expdata.gas+expdata.ammo+expdata.mre
            +expdata.parts+expdata.doll+expdata.equip,2);

        return expdata;
    });
}

window.onload=main;