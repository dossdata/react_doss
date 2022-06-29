import React, { useState, useRef, useEffect, useMemo, useCallback} from 'react';
import { render } from 'react-dom';
import { AgGridReact } from 'ag-grid-react'; // the AG Grid React Component

import 'ag-grid-community/dist/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'; // Optional theme CSS
import BasicModal from './Modal_';

const Table_agegrid = () => {

    const gridRef = useRef(); // Optional - for accessing Grid's API
    const [rowData, setRowData] = useState(); // Set rowData to Array of Objects, one Object per Row
   
    const containerStyle = useMemo(() => ({ width: '100%', height: 500 }), []);
    const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), []);
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    const [list_array,setlist_array] = useState([])


const click_lancemodal = () =>{
    setOpen(true)

}
    // Each Column Definition results in one Column.
    const [columnDefs, setColumnDefs] = useState([
 
   

      { field: 'year',filter:'agTextColumnFilter',pinned: 'left',resizable: true },
      { field: 'date',filter:'agTextColumnFilter',resizable: true },
      { field: 'sport',filter:'agTextColumnFilter',resizable: true },
      { field: 'gold',filter:'agTextColumnFilter',resizable: true },
      { field: 'silver',filter:'agTextColumnFilter',resizable: true },
      { field: 'bronze',filter:'agTextColumnFilter',resizable: true },
      { field: 'total',filter:'agTextColumnFilter',resizable: true,width:"2px" },
      { field: 'Action',
        cellRendererFramework:(params)=><div><button onClick={(props) =>click_lancemodal()}>test</button></div>
    },
      
    ]);
   
    // DefaultColDef sets props common to all Columns
    const defaultColDef = useMemo( ()=> ({
        sortable: true,
        floatingFilter:true,
        // filterParams: {
        //     buttons:["apply","clear","cancel","reset"]
        // },
        flex:1,
        width: 150,
        resizable: true,        
      }));

     // Example of consuming Grid Event
    const cellClickedListener = useCallback( event => {
        setlist_array(event.data);
      
    }, []);
   
 

    // Example load data from sever
    useEffect(() => {
        fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
        .then((resp) => resp.json())
        .then((data) => setRowData(data));
    }, []);
   
    // Example using Grid's API
    const buttonListener = useCallback( e => {
      gridRef.current.api.deselectAll();
    }, []);
   

    const onBtnExport = useCallback(() => {
        gridRef.current.api.exportDataAsCsv();
    }, []);

  
    return (
      <div>
   
        {/* Example using Grid's API */}
        <button onClick={buttonListener}>Push Me</button>

          <button onClick={onBtnExport}>Download CSV export file</button>
   
        {/* On div wrapping Grid a) specify theme CSS Class Class and b) sets Grid size */}
        <div className="ag-theme-alpine" style={containerStyle}>
   
          <AgGridReact
              ref={gridRef} // Ref for accessing Grid's API
   
              rowData={rowData} // Row Data for Rows
   
              columnDefs={columnDefs} // Column Defs for Columns
              defaultColDef={defaultColDef} // Default Column Properties
   
              animateRows={true} // Optional - set to 'true' to have rows animate when sorted
              rowSelection='multiple' // Options - allows click selection of rows
              onCellClicked={cellClickedListener} // Optional - registering for Grid Event
              />
            <BasicModal open={open} handleClose={handleClose} test={list_array} />
        </div>
      </div>
    );
   };
   
   export default Table_agegrid;