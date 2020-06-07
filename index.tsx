import ExpeditionTable from "./components/exptable/exptable";
import CurrentExpeditions from "./components/currentexp/currentexp";

import store,{toggleTableSelectEnabled,toggleCurrentExpSelect} from "./components/thestore/thestore";

import "./index.less";

class IndexMain extends React.Component
{
  state:{
    data:ExpeditionData[]
    currentExpeditions:ExpeditionData[]
  }

  constructor(props:any)
  {
    super(props);

    this.state={
      data:[],
      currentExpeditions:[]
    };
  }

  async componentDidMount():Promise<void>
  {
    this.setState({
      data:await getExpData()
    },this.testSetCurrent);
  }

  // test function, set the current expeditions to some of the data
  testSetCurrent():void
  {
    console.log("test set current");
    this.setState({
      currentExpeditions:[
        this.state.data[0],
        this.state.data[2],
        this.state.data[4],
        this.state.data[5]
      ]
    });
  }

  // callback, current expedition selected
  currentExpeditionSelect(selected:string):void
  {
    toggleTableSelectEnabled();
  }

  // callback occuring when expedition selected from main table
  mainTableSelect(selected:string):void
  {
    toggleCurrentExpSelect();
  }

  render()
  {
    return <>
      <ExpeditionTable data={this.state.data} selected={this.mainTableSelect}/>
      <CurrentExpeditions currentExpeditions={this.state.currentExpeditions} selected={this.currentExpeditionSelect}/>
    </>;
  }
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

function main()
{
    ReactDOM.render(<ReactRedux.Provider store={store}><IndexMain/></ReactRedux.Provider>,
      document.querySelector(".main"));
}

window.onload=main;