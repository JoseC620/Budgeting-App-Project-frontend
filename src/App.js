import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/nav/Navbar';
import Statements from './components/bank/Statements';
import StatementIndex from './components/bank/StatementIndex';
import Home from './components/home/Home';
import NewStatement from './components/bank/NewStatement';
import StatementEdit from './components/bank/StatementEdit';
import Error from './components/error/Error';
import axios from 'axios';
import { useState, useEffect } from 'react';
const API = process.env.REACT_APP_API_URL;

function App() {

  const [statements, setStatements] = useState([]);
  const [total, setTotal] = useState()

  useEffect(() => {
    axios
      .get(`${API}/statements`)
      .then((response) => {
        console.log(response.data);
        setStatements(response.data);
      })
      .then(() => {

        setTotal(statements.reduce((a, statement) => {
       
           if(statement.deposit){
               return (a + Number(statement.amount))
           } else {
               return (a - Number(statement.amount))
           }
       },0))
      })
  }, [statements]);




  return (
    <div className="App">
     <Router>
      <Navbar total={total} />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/statements' element={<Statements />}/>
        <Route path='/statements/:id' element={<StatementIndex />}/>
        <Route path='/new-statement' element={<NewStatement />}/>
        <Route path='/edit/:id' element={<StatementEdit />}/>
        <Route path='/*' element={<Error />}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
