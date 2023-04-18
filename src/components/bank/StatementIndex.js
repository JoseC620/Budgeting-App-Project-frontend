import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;


export default function StatementIndex( { statement } ) {

    let { id } = useParams();


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
            <Link to="/edit/:id/">
                <button>Edit</button>
            </Link>
        </div>
    )
};