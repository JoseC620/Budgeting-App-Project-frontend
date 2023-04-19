import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./StatementIndex.css"
const API = process.env.REACT_APP_API_URL;


export default function StatementIndex() {

    const [statement, setStatement] = useState({});

    let { id } = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        axios
          .get(`${API}/statements/${id}`)
          .then((response) => {
            console.log(response.data);
            setStatement(response.data);
          })
      }, [id]);

    const handleDelete = () => {
        axios
        .delete(`${API}/statements/${id}`)
        .then(() => {
            navigate(`/statements`);
          })
        .catch((e) => console.error(e))
       };

    return (
        <div>
            <aside className="stuff">
            <span><b>Category:</b> {statement.category}</span>
            <span>{statement.date}</span>
            <span>{statement.item_name}</span>
            <span>{statement.amount}</span>
            <span> {statement.from}</span>
            <section>
            <button onClick={handleDelete}>Delete</button>
            <Link to={`/edit/${id}`}>
                <button>Edit</button>
            </Link>
            <Link to={`/statements`}>
                <button>Go Back</button>
            </Link>
            </section>
            </aside>
        </div>
    )
};