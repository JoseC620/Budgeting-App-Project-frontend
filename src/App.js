import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/nav/Navbar';
import Statements from './components/bank/Statements';
import StatementIndex from './components/bank/StatementIndex';
import Home from './components/home/Home';
import NewStatement from './components/bank/NewStatement';
import StatementEdit from './components/bank/StatementEdit';
import Error from './components/error/Error';

function App() {

  return (
    <div className="App">
     <Router>
      <Navbar />
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
