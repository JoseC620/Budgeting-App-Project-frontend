import { Link } from "react-router-dom";


export default function Statements( { statements, callback } ) {
    return (
        <div>
            {statements.map((statement) => {
                return (
                    <div key={statement.id}>
                        <span>{statement.date}</span>
                        <Link to={`/statements/${statement.id}`} onClick={() => {callback(statement)}}>
                        <h3>{statement.item_name}</h3>
                        </Link>
                        <span>{statement.amount}</span>
                    </div>
                )
            })}
        </div>
    )
};