import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./StatementEdit.css"
const API = process.env.REACT_APP_API_URL;


export default function StatementEdit() {

    const navigate = useNavigate();
    let { id } = useParams();

    const [editStatement, setEditStatement] = useState({
      id: "",
      item_name: "",
      amount: "",
      date: "",
      from: "", 
      category: ""
    });

    useEffect(() => {
      axios
        .get(`${API}/statements/${id}`)
        .then((response) => {
          setEditStatement(response.data);
        })
    }, [id]);

      const handleTextChange = (event) => {
        setEditStatement({ ...editStatement, [event.target.id]: event.target.value });
      };

      const handleCheckboxChange = () => {
        setEditStatement({ ...editStatement, deposit: !editStatement.deposit });
      };

    const updateStatement = () => {
        axios
          .put(`${API}/statements/${id}`, editStatement)
           .then(() => {
          navigate(`/statements/${id}`);
        })
          .catch((e) => console.warn("warn", e));
      }

      const handleSubmit = (event) => {
        event.preventDefault();
        updateStatement(editStatement);
      };


    return (
        <div className="entire">
         <form className="edit" onSubmit={handleSubmit}>
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
            type="number"
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
        <label htmlFor="deposit">Deposit:</label>
        <input
          className="check"
          id="deposit"
          name="deposit"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={editStatement.deposit}
        />
        <br></br>
        <input type="submit"/>
        </form>
        </div>
    )
}