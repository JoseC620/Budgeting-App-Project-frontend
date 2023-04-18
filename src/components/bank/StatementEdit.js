import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;


export default function StatementEdit( { statement } ) {

    const navigate = useNavigate();
    let { id } = useParams();

    const [editStatement, setEditStatement] = useState(statement);

      const handleTextChange = (event) => {
        setEditStatement({ ...editStatement, [event.target.id]: event.target.value });
      };

    const updateStatement = () => {
        axios
          .put(`${API}/statements/${id}`, editStatement)
          .catch((e) => console.warn("warn", e));
      }

      const handleSubmit = (event) => {
        event.preventDefault();
        updateStatement(editStatement);
      };


    return (
        <div>
         <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
             id="item_name"
             value={editStatement.item_name}
             type="text"
             onChange={handleTextChange}
             required
            />
            <label htmlFor="number">Amount:</label>
            <input
            id="amount"
            type="text"
            required
            value={editStatement.amount}
            onChange={handleTextChange}
        />
        <label htmlFor="date">Date:</label>
        <input
          id="date"
          name="date"
          type="text"
          value={editStatement.date}
          onChange={handleTextChange}
        />
         <label htmlFor="from">From:</label>
        <input
          id="from"
          name="from"
          type="text"
          value={editStatement.from}
          onChange={handleTextChange}
        />
        <label htmlFor="category">Category:</label>
        <input
          id="category"
          type="text"
          name="category"
          value={editStatement.category}
          onChange={handleTextChange}
        />
        <br />
        <input type="submit"/>
      </form>
        </div>
    )
}