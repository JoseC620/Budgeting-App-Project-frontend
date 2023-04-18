import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
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
            {statement.item_name}
            {statement.amount}
            {statement.date}
            {statement.from}
            <button onClick={handleDelete}>Delete</button>
            <Link to={`/edit/${id}`}>
                <button>Edit</button>
            </Link>
        </div>
    )
};