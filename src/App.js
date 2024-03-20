//import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Sidebar from './Sidebar';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-9">
          <Home />
        </div>
      </div>
    </div>
  </Router>
  );
}

export default App;
