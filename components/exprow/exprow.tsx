import "./exprow.less";

interface ExpeditionRowProps
{
  data:ExpeditionData //data of the row
  selected:boolean //row is in a selected state
}

/* ExpeditionRow(ExpeditionData data, bool selected) */
export default class ExpeditionRow extends React.PureComponent
{
  props:ExpeditionRowProps

  render()
  {
    var selectedClass=this.props.selected?"selected":"";

    return <tr className={`expedition-row ${selectedClass}`}>
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