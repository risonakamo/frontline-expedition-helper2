import ExpeditionRow from "../exprow/exprow";

import "./currentexp.less";

interface CurrentExpeditionsProps
{
  currentExpeditions:ExpeditionData[] //array of current expeditions, should be 4
}

interface CurrentExpeditionsState
{
  selected:number //index of the expedition the cursor is over
}

/* CurrentExpeditions(ExpeditionData[] currentExpeditions) */
export default class CurrentExpeditions extends React.PureComponent
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
      switch (e.key)
      {
        case "ArrowDown":
        this.navigate(1);
        break;

        case "ArrowUp":
        this.navigate(-1);
        break;
      }
    });
  }

  // move selection cursor, positive is down, negative is up. wraps when hitting the top or bottom
  navigate(change:number):void
  {
    var newselected:number=this.state.selected+change;

    if (newselected>=this.props.currentExpeditions.length)
    {
      newselected=0;
    }

    else if (newselected<0)
    {
      newselected=this.props.currentExpeditions.length-1;
    }

    this.setState({
      selected:newselected
    });
  }

  render()
  {
    return <table className="current-expeditions">
      <tbody>
        {_.map(this.props.currentExpeditions,(x:ExpeditionData,i:number)=>{
          return <ExpeditionRow data={x} key={x.name} selected={i==this.state.selected}/>;
        })}
      </tbody>
    </table>;
  }
}