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

    let total = statements.reduce((a, statement) => {
        if(statement.deposit){
            return (a + statement.amount)
        } else {
            return (a - statement.amount)
        }
    },0)


    return (
        <div>
            <h3 style={{color: total > 0 ? "green" : "red"}}>${total}</h3>
            {statements.map((statement) => {
                return (
                    <div key={statement.id}>
                        <span>{statement.date}</span>
                        <Link to={`/statements/${statements.indexOf(statement)}`}>
                        <h3>{statement.item_name}</h3>
                        </Link>
                        <span style={{color: statement.deposit ? "green" : "red"}}>{!statement.deposit ? "-": ""}{statement.amount}</span>
                    </div>
                )
            })}
        </div>
    )
};