import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import { ReactUtilityTable } from 'react-utility-table';
import { mockutitlity } from '../MockData/mockutitlity';
import { AnyRecord } from 'dns';

const Demo = (props: any) => {
    const [tableData, setTableData] = useState(mockutitlity);
    debugger
    return (
        <>
            <Typography gutterBottom variant="h4">
                Demo
            </Typography>
            <Typography variant="h6">
              {/* add columns and data to ReactUtitlityTable */}
                <ReactUtilityTable
                    columns={[
                        { title: 'First Name', field: 'first_name', filtering: false },
                        { title: 'Last Name', field: 'last_name', 
                        render: (rowData: any) =><input value = {rowData.first_name} type ="button" onClick={(e: any) => alert(rowData.first_name)}/>},
                        { title: 'Email', field: 'email', editComponent: props => (
                          <input
                            type="text"
                            value={props.value}
                            onChange={e => props.onChange(e.target.value)}
                          />
                        )},
                    ]}
                    data={tableData}
                    
                    options={{
                        filtering:true,
                        exportButton: true
                    }}

                    // editable for crud operations(Add, Edit, Delete)
                    editable={{
                      onRowAdd: (newData: any) =>
                        new Promise((resolve: any, reject) => {
                          setTimeout(() => {
                            setTableData([...tableData, newData]);
                            resolve();
                          }, 1000)
                        }),
                    
                      onRowUpdate: (newData: any, oldData: any) =>
                        new Promise((resolve: any, reject) => {
                          setTimeout(() => {
                            const dataUpdate = [...tableData];
                            const index = oldData.tableData.id;
                            dataUpdate[index] = newData;
                            setTableData([...dataUpdate]);
                    
                            resolve();
                          }, 1000)
                        }),
                    
                      onRowDelete: (oldData: any) =>
                        new Promise((resolve: any, reject) => {
                          setTimeout(() => {
                            const dataDelete = [...tableData];
                            const index = oldData.tableData.id;
                            dataDelete.splice(index, 1);
                            setTableData([...dataDelete]);
                            resolve();
                          }, 1000)
                        }),
                    }}/>

            </Typography>
        </>

    );
};

export default Demo;




                   