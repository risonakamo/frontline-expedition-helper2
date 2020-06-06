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