import 'handsontable/dist/handsontable.full.min.css';
//import Handsontable from 'handsontable/base';
import { registerAllModules } from 'handsontable/registry';
import { HotTable } from '@handsontable/react';


registerAllModules();

const Home = ({selectedCheckboxes,hotRef}) => {
  
  let col = ['sample_collector_sample_ID'];
  let schema = {
    'Sample collection and processing': {
      sample_collector_sample_ID: null
    },
    'Host information':{},'Strain and isolation information':{}, 'Sequence information':{}, 'Public repository information':{}, 'Risk assessment information':{},'Antimicrobial resistance':{}
  }
  for (const key in selectedCheckboxes) {
    if (selectedCheckboxes[key] === true) {
      
      const parts = key.split(".");
      if (parts.length === 2 ){
        const index = parts[0];
        const subkey = parts[1];
        const schemaKey = Object.keys(schema).find((schemaKey) => schemaKey.startsWith(index));
        if (schemaKey) {
          schema[schemaKey][subkey] = null;
          col.push(subkey)

        }
      }else if (parts.length === 4 ){
        const index = parts[0];
        const subkey = parts[3];
        
        const schemaKey = Object.keys(schema).find((schemaKey) => schemaKey.startsWith(index));
        
        if (schemaKey) {
          //console.log("adding",key)
          schema[schemaKey][subkey] = null;
          col.push(subkey)

        }

      }
    }
  }
  //console.log(schema)
 
  

return (
  <div>
      <HotTable
      ref={hotRef}
      data={[]}
      rowHeaders={true}
      dataSchema={schema}
      startRows={5}
      startCols={4}
      colHeaders={col}
      contextMenu={true}
      height="auto"
      width="auto"
      /*columns={[
        { data: 'id' },
        { data: 'name.first' },
        { data: 'name.last' },
        { data: 'address' }
      ]}*/
      minSpareRows={20}
      autoWrapRow={true}
      autoWrapCol={true}
      
      licenseKey="non-commercial-and-evaluation"
    />
  </div>  

);


}
export default Home;