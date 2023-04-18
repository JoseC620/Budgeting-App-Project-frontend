import { useState, useEffect} from "react";
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import { v4 as uuid } from 'uuid';
const API = process.env.REACT_APP_API_URL;



export default function NewStatement() {

    const navigate = useNavigate();
    const [statement, setStatement] = useState({
      id: "",
      item_name: "",
      amount: "",
      date: "",
      from: "", 
      category: ""
    });

    const unique_id = uuid();
    const small_id = unique_id.slice(0,10);


    const handleTextChange = (event) => {
        setStatement({ ...statement, [event.target.id]: event.target.value });
      };
    
    const addstatement = () => {
        axios
        .post(`${API}/statements`, statement)
        .then(() => {
          navigate(`/statements`);
        })
        .catch((c) => console.error("catch", c))
      };
    
    
    const handleSubmit = (event) => {
        event.preventDefault();
        statement.id = small_id
        addstatement(statement)
        // navigate(`/statements/${statement.id}`);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
             id="item_name"
             value={statement.item_name}
             type="text"
             onChange={handleTextChange}
             required
            />
            <label htmlFor="number">Amount:</label>
            <input
            id="amount"
            type="text"
            required
            value={statement.amount}
            onChange={handleTextChange}
        />
        <label htmlFor="date">Date:</label>
        <input
          id="date"
          name="date"
          type="text"
          value={statement.date}
          onChange={handleTextChange}
        />
         <label htmlFor="from">From:</label>
        <input
          id="from"
          name="from"
          type="text"
          value={statement.from}
          onChange={handleTextChange}
        />
        <label htmlFor="category">Category:</label>
        <input
          id="category"
          type="text"
          name="category"
          value={statement.category}
          onChange={handleTextChange}
        />
        <br />
        <input type="submit"/>
      </form>
        </div>
    )
};