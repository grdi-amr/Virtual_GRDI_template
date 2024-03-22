import Dropdown from 'react-bootstrap/Dropdown';



const DropDownMenu = ({buttonClickCallback}) => {



    return (
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Menu
          </Dropdown.Toggle>
    
          <Dropdown.Menu>
            <Dropdown.Item id="export-file" onClick={(...args) => buttonClickCallback(...args)}>Export as XLS</Dropdown.Item>
            
          </Dropdown.Menu>
        </Dropdown>
      );


}


export default DropDownMenu;