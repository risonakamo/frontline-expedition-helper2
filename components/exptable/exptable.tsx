import "./exptable.less";

interface ExpeditionTableProps
{
  data:ExpeditionData[]
}

/* ExpeditionTable(ExpeditionData[] data) */
export default class ExpeditionTable extends React.Component
{
  props:ExpeditionTableProps

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

      </tbody>
    </table>;
  }
}