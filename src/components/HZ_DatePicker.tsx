type propsType = {
    datasource: any[],
    gridCols: {
        key: string,
        label: string,
        displayField?: any
      }[],
      loading?: boolean
      className:string,
  }
  
   function HZ_DataGrid(props: propsType) {
  
    const { datasource, gridCols, loading, className } = props
  
    return <>
        {loading ? <h1>Loading ...</h1> : <table className={className}>
            <thead>
                {gridCols.map((col, ind) => <th key={ind}>{col.label}</th>)}
            </thead>
            <tbody>
                {datasource.map((rows: any) => <tr>
                    {gridCols.map((col, ind) => <td
                        key={ind}
                    >{col.displayField ? col.displayField(rows) : rows[col.key]}</td>)}
                </tr>)}
            </tbody>
        </table>}
    </>
  }
  
  export default HZ_DataGrid