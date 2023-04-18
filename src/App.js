import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './components/nav/Navbar';
import axios from "axios";
import Statements from './components/bank/Statements';
import StatementIndex from './components/bank/StatementIndex';
import Home from './components/home/Home';
import NewStatement from './components/bank/NewStatement';
import StatementEdit from './components/bank/StatementEdit';

const API = process.env.REACT_APP_API_URL;


function App() {

  const [statements, setStatements] = useState([]);
  const [statement, setStatement] = useState({});

  useEffect(() => {
    axios
      .get(`${API}/statements`)
      .then((response) => {
        console.log(response.data);
        setStatements(response.data);
      })
  }, []);



  return (
    <div className="App">
     <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/statements' element={<Statements statements={statements} callback={setStatement} />}/>
        <Route path='/statements/:id' element={<StatementIndex statements={statements} statement={statement} />}/>
        <Route path='/new-statement' element={<NewStatement />}/>
        <Route path='/edit/:id/' element={<StatementEdit statement={statement} />}/>
      </Routes>

     </Router>
    </div>
  );
}

export default App;
