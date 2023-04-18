import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
const API = process.env.REACT_APP_API_URL;

export default function Statements() {

    const [statements, setStatements] = useState([]);

    useEffect(() => {
      axios
        .get(`${API}/statements`)
        .then((response) => {
          console.log(response.data);
          setStatements(response.data);
        })
    }, []);

    return (
        <div>
            {statements.map((statement) => {
                return (
                    <div key={statement.id}>
                        <span>{statement.date}</span>
                        <Link to={`/statements/${statements.indexOf(statement)}`}>
                        <h3>{statement.item_name}</h3>
                        </Link>
                        <span>{statement.amount}</span>
                    </div>
                )
            })}
        </div>
    )
};