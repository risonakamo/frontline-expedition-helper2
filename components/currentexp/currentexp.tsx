import ExpeditionRow from "../exprow/exprow";

interface CurrentExpeditionsProps
{
  currentExpeditions:ExpeditionData[] //array of current expeditions, should be 4
}

/* CurrentExpeditions(ExpeditionData[] currentExpeditions) */
export default class CurrentExpeditions extends React.PureComponent
{
  props:CurrentExpeditionsProps

  render()
  {
    return <table className="current-expeditions">
      <tbody>
        {_.map(this.props.currentExpeditions,(x:ExpeditionData)=>{
          return <ExpeditionRow data={x} key={x.name}/>;
        })}
      </tbody>
    </table>;
  }
}