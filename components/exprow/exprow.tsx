import "./exprow.less";

interface ExpeditionRowProps
{
  data:ExpeditionData
}

/* ExpeditionRow(ExpeditionData data) */
export default class ExpeditionRow extends React.PureComponent
{
  props:ExpeditionRowProps

  render()
  {
    return <tr className="expedition-row">
      <td>{this.props.data.name}</td>
      <td>{this.props.data.gas}</td>
      <td>{this.props.data.ammo}</td>
      <td>{this.props.data.mre}</td>
      <td>{this.props.data.parts}</td>
      <td>{this.props.data.doll}</td>
      <td>{this.props.data.equip}</td>
      <td>{this.props.data.total}</td>
    </tr>;
  }
}