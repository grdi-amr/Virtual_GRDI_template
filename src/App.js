//import logo from './logo.svg';
import React, {useState, useEffect} from 'react';
import './App.css';
import Home from './Home';
import Sidebar from './Sidebar';
import { BrowserRouter as Router } from 'react-router-dom';
import jsonData from './templates/schema.json';


function App() {
  const [data, setData] = useState(null);
  const [selectedCheckboxes, setSelectedCheckboxes] = useState({});

  useEffect(() => {
    // Read the JSON file and set the data once
    setData(jsonData);

    const initializeCheckboxes = (obj, path = '') => {
      Object.keys(obj).forEach((key) => {
        const newPath = path ? `${path}.${key}` : key;
        setSelectedCheckboxes((prevState) => ({
          ...prevState,
          [newPath]: false,
        }));
        if (typeof obj[key] === 'object' && obj[key] !== null) {
          initializeCheckboxes(obj[key], newPath);
        }
      });
    };
  
    initializeCheckboxes(jsonData);
    //console.log("INHERE",selectedCheckboxes)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  

  return (
    <Router>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <Sidebar 
              setSelectedCheckboxes={setSelectedCheckboxes}
              selectedCheckboxes = {selectedCheckboxes}
              data ={data} 
              />
          </div>
          <div className="col-md-9">
            <div className="offset-md-1 col-md-11"> {/* Adjust offset as needed */}
              <Home 
              selectedCheckboxes={selectedCheckboxes}
              />
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
