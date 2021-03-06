import ExpeditionRow from "../exprow/exprow";
import {wrapClamp} from "../currentexp/currentexp";
import {TheStore,toggleTableSelectEnabled} from "../thestore/thestore";

import "./exptable.less";

interface ExpeditionTableProps
{
  data:ExpeditionData[] //all expedition data
  selectEnabled:boolean //STORE
  selected:(selectedExp:string)=>void //selected expedition callback
}

interface ExpeditionTableState
{
  selected:number //current cursor selected row
}

/* ExpeditionTable(ExpeditionData[] data, store-bool selectEnabled, function selected) */
class ExpeditionTable extends React.Component
{
  props:ExpeditionTableProps
  state:ExpeditionTableState

  constructor(props:ExpeditionTableProps)
  {
    super(props);

    this.state={
      selected:0
    };
  }

  componentDidMount():void
  {
    this.keyControl();
  }

  // key control initialisation
  keyControl():void
  {
    document.addEventListener("keydown",(e:KeyboardEvent)=>{
      if (!this.props.selectEnabled)
      {
        return;
      }

      switch (e.key)
      {
        case "ArrowDown":
        this.navigate(1);
        break;

        case "ArrowUp":
        this.navigate(-1);
        break;

        case "Enter":
        console.log("trigger 2");
        this.select();
        break;
      }
    });
  }

  // move selection cursor, positive is down, negative is up. wraps when hitting the top or bottom
  navigate(change:number):void
  {
    this.setState({
      selected:wrapClamp(this.state.selected+change,0,this.props.data.length-1)
    });
  }

  // perform selection on the current highlighted row. disables selection mode
  // and calls selected callback
  select():void
  {
    this.props.selected(this.props.data[this.state.selected].name);

    toggleTableSelectEnabled();
  }

  render()
  {
    return <table className="expedition-table">
      <thead>
        <tr>
          <td>name</td>
          <td>gas</td>
          <td>ammo</td>
          <td>mre</td>
          <td>parts</td>
          <td>doll</td>
          <td>equip</td>
          <td>total</td>
        </tr>
      </thead>

      <tbody>
        {_.map(this.props.data,(x:ExpeditionData,i:number)=>{
          var selected=0;
          if (this.props.selectEnabled && i==this.state.selected)
          {
            selected=1;
          }

          return <ExpeditionRow data={x} key={x.name} selected={selected}/>;
        })}
      </tbody>
    </table>;
  }
}

export default ReactRedux.connect((storestate:TheStore)=>{
  return {
    selectEnabled:storestate.tableSelectEnabled
  };
})(ExpeditionTable);