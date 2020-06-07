import ExpeditionRow from "../exprow/exprow";
import {TheStore,toggleCurrentExpSelect} from "../thestore/thestore";

import "./currentexp.less";

interface CurrentExpeditionsProps
{
  currentExpeditions:ExpeditionData[] //array of current expeditions, should be 4
  selectEnabled:boolean //STORE, whether row selection is enabled
  selected:(selectedExpedition:string)=>void //callback called when expedition selected, provides name of selected expedition
}

interface CurrentExpeditionsState
{
  selected:number //index of the expedition the cursor is over
}

/* CurrentExpeditions(ExpeditionData[] currentExpeditions, store-bool selectEnabled,
    function selected) */
class CurrentExpeditions extends React.PureComponent
{
  props:CurrentExpeditionsProps
  state:CurrentExpeditionsState

  constructor(props:CurrentExpeditionsProps)
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
        this.select();
        break;
      }
    });
  }

  // move selection cursor, positive is down, negative is up. wraps when hitting the top or bottom
  navigate(change:number):void
  {
    this.setState({
      selected:wrapClamp(this.state.selected+change,0,this.props.currentExpeditions.length-1)
    });
  }

  // perform selection on the current highlighted row. disables selection mode
  // and calls selected callback
  select():void
  {
    this.props.selected(this.props.currentExpeditions[this.state.selected].name);

    toggleCurrentExpSelect();
    this.setState({
      selected:-1
    });
  }

  render()
  {
    return <table className="current-expeditions">
      <tbody>
        {_.map(this.props.currentExpeditions,(x:ExpeditionData,i:number)=>{
          var selected=i==this.state.selected?1:0;

          return <ExpeditionRow data={x} key={x.name} selected={selected}/>;
        })}
      </tbody>
    </table>;
  }
}

// wrap clamps an input to a min and a max. if the number is over the max, wraps to the min,
// or wraps to the max if under the min. both INCLUSIVE (so equal to max will NOT wrap)
export function wrapClamp(input:number,min:number,max:number):number
{
  if (input>max)
  {
    return min;
  }

  else if (input<min)
  {
    return max;
  }

  return input;
}

export default ReactRedux.connect((storestate:TheStore)=>{
  return {
    selectEnabled:storestate.currentExpSelectEnabled
  };
})(CurrentExpeditions);