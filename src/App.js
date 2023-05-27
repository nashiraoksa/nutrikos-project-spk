import './App.css';
// import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/main/Home';
import { DSS } from './pages/main/DSS';
import { Login } from './pages/Login';
import { SignUp } from './pages/SignUp';

import { Header } from './components/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/signUp" element={<SignUp></SignUp>}></Route>
          <Route path="/DSS" element={<DSS></DSS>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
