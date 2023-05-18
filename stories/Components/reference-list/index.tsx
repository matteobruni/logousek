
type ReferenceListProps = {
    tableRows: [
        {
            name: string,
            description: string
        }
    ]
}

const ReferenceList: React.FC<ReferenceListProps> = ({
    tableRows
}) => {
    return (
        <>
            <h2>Reference List</h2>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                </tr>
                {tableRows.map(tableRow => (
                    <tr key={`table_row${tableRow.name}`}>
                        <td>{tableRow.name}</td>
                        <td>{tableRow.description}</td>
                    </tr>
                ))}
            </table>
        </>
    )
}

export default ReferenceList
