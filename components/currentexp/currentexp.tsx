import ExpeditionRow from "../exprow/exprow";

import "./currentexp.less";

interface CurrentExpeditionsProps
{
  currentExpeditions:ExpeditionData[] //array of current expeditions, should be 4
  selected:(selectedExpedition:string)=>void //callback called when expedition selected, provides name of selected expedition
}

interface CurrentExpeditionsState
{
  selected:number //index of the expedition the cursor is over
  selectEnabled:boolean //whether row selection is enabled
}

/* CurrentExpeditions(ExpeditionData[] currentExpeditions, function selected) */
export default class CurrentExpeditions extends React.PureComponent
{
  props:CurrentExpeditionsProps
  state:CurrentExpeditionsState

  constructor(props:CurrentExpeditionsProps)
  {
    super(props);

    this.state={
      selected:0,
      selectEnabled:true
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
      if (!this.state.selectEnabled)
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

    this.setState({
      selected:-1,
      selectEnabled:false
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