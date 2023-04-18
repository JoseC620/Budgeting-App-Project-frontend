import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
const API = process.env.REACT_APP_API_URL;


export default function StatementIndex() {

    const [statements, setStatements] = useState([]);
    const [statement, setStatement] = useState({});

    let { id } = useParams()


    useEffect(() => {
      axios
        .get(`${API}/statements`)
        .then((response) => {
          console.log(response.data);
          setStatements(response.data);
        })
    }, []);

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
        .catch((e) => console.error(e))
       };

       console.log(useParams())

    return (
        <div>
            {statement.item_name}
            {statement.amount}
            {statement.date}
            {statement.from}
            <button onClick={handleDelete}>
                <a href="/statements">Delete</a></button>
            <Link to={`/edit/${id}`}>
                <button>Edit</button>
            </Link>
        </div>
    )
};