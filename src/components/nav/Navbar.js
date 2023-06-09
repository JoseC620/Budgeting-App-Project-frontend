import { Link } from "react-router-dom";
import "./Navbar.css"


export default function Navbar( { total } ) {



    return (
        <div className="whole">
            <header className="proj">
                <h2>Budgeting App Project</h2>
            </header>
            
            <ul className="navbar">

            
            <Link to="/">
                <span>Home</span>
            </Link>

            <Link to="/new-statement">
                <span>Create a New Bank Statement</span>
            </Link>

            <Link to="/statements">
                <span>All Statements</span>
            </Link>

            <h3>Bank Account: ${total}</h3>
            </ul>

        </div>
    )
};