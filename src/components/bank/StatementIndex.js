


export default function StatementIndex( { statement } ) {
    return (
        <div>
            {statement.item_name}
            {statement.amount}
            {statement.date}
            {statement.from}
        </div>
    )
};