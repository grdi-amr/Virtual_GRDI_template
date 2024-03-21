import 'handsontable/dist/handsontable.full.min.css';
//import Handsontable from 'handsontable/base';
import { registerAllModules } from 'handsontable/registry';
import { HotTable } from '@handsontable/react';

registerAllModules();

const Home = ({selectedCheckboxes}) => {
  let col = ['sample_collector_sample_ID'];
  let schema = {
    'Sample collection and processing': {
      sample_collector_sample_ID: null
    },
    'Host information':{},'Strain and isolation information':{}
  }
  for (const key in selectedCheckboxes) {
    if (Object.hasOwnProperty.call(selectedCheckboxes, key) && (selectedCheckboxes === true)) {
      const [index, subkey] = key.split(".");
      const schemaKey = Object.keys(schema).find((schemaKey) => schemaKey.startsWith(index));
      if (schemaKey) {
        schema[schemaKey][subkey] = null;
      }
    }
  }
  console.log(schema)


return (
  <div>
      <HotTable
      data={[]}
      rowHeaders={true}
      dataSchema={schema}
      startRows={5}
      startCols={4}
      colHeaders={col}
      height="auto"
      width="auto"
      /*columns={[
        { data: 'id' },
        { data: 'name.first' },
        { data: 'name.last' },
        { data: 'address' }
      ]}*/
      minSpareRows={1}
      autoWrapRow={true}
      autoWrapCol={true}
      licenseKey="non-commercial-and-evaluation"
    />
  </div>  

);


}
export default Home;