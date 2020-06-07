import "./exprow.less";

interface ExpeditionRowProps
{
  data:ExpeditionData //data of the row
  selected:number //row is in a selected state, 0=not selected, 1= selected, 2=yellow selected
}

/* ExpeditionRow(ExpeditionData data, number selected) */
export default class ExpeditionRow extends React.PureComponent
{
  props:ExpeditionRowProps

  render()
  {
    return <tr className={`expedition-row ${resolveSelectClass(this.props.selected)}`}>
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

// given a select state number, (0,1,2), return string for select state
function resolveSelectClass(selectstate:number):string
{
  switch (selectstate)
  {
    case 1:
    return "selected";

    case 2:
    return "selected yellow";
  }

  return "";
}