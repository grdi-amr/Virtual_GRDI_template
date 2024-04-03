//import logo from './logo.svg';
import React, {useRef,useState, useEffect} from 'react';
import { registerAllModules } from 'handsontable/registry';
import './App.css';
import Home from './Home';
import Sidebar from './Sidebar';
import { BrowserRouter as Router } from 'react-router-dom';
import jsonData from './templates/schema.json';
import jsonVoc from './templates/schema_data_harmonizer.json';
import DropDownMenu from './DropDownMenu';
import * as XLSX from 'xlsx';


function App() {
  const [data, setData] = useState(null);
  const [selectedCheckboxes, setSelectedCheckboxes] = useState({});
  const [vocabulary, setVoc] = useState(null);
  // register Handsontable's modules
    registerAllModules();


  useEffect(() => {
    // Read the JSON file and set the data once
    setData(jsonData);
    setVoc (jsonVoc);
    //console.log(jsonVoc)
    

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

  
  //functions to export data
  const hotRef= useRef(null);
  console.log("OLHA AI",hotRef)
  const buttonClickCallback = () => {
    const hot = hotRef.current.hotInstance;
    console.log('output',hot)
    const exportData = hot.getData(); // Get the data from the Handsontable instance
    console.log('getdata',hot)
    const exportHeaders = hot.getColHeader(); // Get the column headers
    console.log('getheader',hot)

  // Combine the column headers and data
    const exportArray = [exportHeaders].concat(exportData);

    // Convert the data to Excel workbook
    const wb = XLSX.utils.book_new();
  const ws = XLSX.utils.aoa_to_sheet(exportArray);
  XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

  // Save the Excel file
  XLSX.writeFile(wb, 'GRDI-AMR2_template.xlsx');
  };


  return (
    <Router>
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 mb-3">
          <DropDownMenu buttonClickCallback={buttonClickCallback} />
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <Sidebar
            setSelectedCheckboxes={setSelectedCheckboxes}
            selectedCheckboxes={selectedCheckboxes}
            data={data}
          />
        </div>
        <div className="col-md-9">
          <div className="col-md-10 offset-md-2">
            {/* Adjust offset as needed */}
            <Home 
            selectedCheckboxes={selectedCheckboxes} 
            hotRef={hotRef}
            vocabulary = {vocabulary}
             />
          </div>
        </div>
      </div>
    </div>
  </Router>
  );
}

export default App;
