import 'handsontable/dist/handsontable.full.min.css';
//import Handsontable from 'handsontable/base';
import { registerAllModules } from 'handsontable/registry';
import { HotTable } from '@handsontable/react';


registerAllModules();

const Home = ({selectedCheckboxes,hotRef,vocabulary}) => {
  
  let col = ['sample_collector_sample_ID'];
  let schema = {
    'Sample collection and processing': {
      sample_collector_sample_ID: null
    },
    'Host information':{},'Strain and isolation information':{}, 'Sequence information':{}, 'Public repository information':{}, 'Risk assessment information':{},'Antimicrobial resistance':{}
  }
  let dropdown_options= [{}];
  for (const key in selectedCheckboxes) {
    if (selectedCheckboxes[key] === true) {
      
      const parts = key.split(".");
      if (parts.length === 2 ){
        const index = parts[0];
        const subkey = parts[1];
        const schemaKey = Object.keys(schema).find((schemaKey) => schemaKey.startsWith(index));
        if (schemaKey) {
          schema[schemaKey][subkey] = null;
          col.push(subkey);
          let terms_list =[];
          for (const key in vocabulary.enums) {
            const trimmedKey = key.replace(" menu", "");
            if (subkey === trimmedKey) {
              
              for (const term in vocabulary.enums[key].permissible_values){
               //console.log(vocabulary.enums[key].permissible_values[term])
                terms_list.push(term)
              }
              
              }
              //console.log(dropdown_options)
            }

            if (terms_list.length === 0) {
              dropdown_options.push({});
            }else{
            dropdown_options.push(
              {
                type: 'autocomplete',
                source: terms_list,
                strict: false
              }
            );
            }

        }
      }else if (parts.length === 4 ){
        const index = parts[0];
        const subkey = parts[3];
        
        const schemaKey = Object.keys(schema).find((schemaKey) => schemaKey.startsWith(index));
        
        if (schemaKey) {
          //console.log("adding",key)
          schema[schemaKey][subkey] = null;
          col.push(subkey);
          let terms_list =[];
          for (const key in vocabulary.enums) {
            
            if (key.startsWith('antimicrobial')){
              const trimmedKey = key.replace("antimicrobial_", "").replace(" menu","");
              
              if (subkey.endsWith(trimmedKey)){
                for (const term in vocabulary.enums[key].permissible_values){
                  //console.log(vocabulary.enums[key].permissible_values[term])
                   terms_list.push(term)
                 }
                
              }
            }
          }
          if (terms_list.length === 0) {
            dropdown_options.push({});
          }else{
          dropdown_options.push(
            {
              type: 'autocomplete',
              source: terms_list,
              strict: false
            }
          );
          }

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
      columns={dropdown_options}
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