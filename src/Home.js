import 'handsontable/dist/handsontable.full.min.css';
import Handsontable from 'handsontable/base';
import { registerAllModules } from 'handsontable/registry';
import { HotTable } from '@handsontable/react';

registerAllModules();

const Home = () => {
  let col = ['sample_collector_sample_ID'];
  let schema = {
    'Sample collection and processing': {
      sample_collector_sample_ID: null
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