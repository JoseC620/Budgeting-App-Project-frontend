import { Link } from "react-router-dom";


export default function Navbar() {



    return (
        <div>
            <ul>

            <h2>Budgeting App Project</h2>
            
            <Link to="/">
                <span>Home</span>
            </Link>

            <Link to="/new-statement">
                <span>Create a New Bank Statement</span>
            </Link>

            <Link to="/statements">
                <span>All Statements</span>
            </Link>
            </ul>

        </div>
    )
};