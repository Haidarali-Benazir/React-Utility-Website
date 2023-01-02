import React from 'react';
import theme from 'prism-react-renderer/themes/nightOwl';
import { ReactUtilityTable } from 'react-utility-table';
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live';
import Layout from '../Components/Layout';
import { Sandpack } from '@codesandbox/sandpack-react';
import { Box, Grid } from '@mui/material';


const Install = (props: any) => {
  
  // const simpleEx = require('../Images/SimpleExample.PNG');
  const scope = { ReactUtilityTable };
  const code = `import React from "react";
    import { ReactUtilityTable } from "react-utility-table";
    export default function App() {
      const [mockData, setMockData] = React.useState([
        { first_name: "Dwayne", last_name: "Johnson", age: 48 },
        { first_name: "John", last_name: "Cena", age: 46 },
        { first_name: "Randy", last_name: "Orton", age: 45 },
        { first_name: "Roman", last_name: "Reign", age: 38 },
        { first_name: "Brock", last_name: "Lesnar", age: 50 },
        { first_name: "Roundy", last_name: "Rousey", age: 46 },
      ]);
      return (
        <div>
          <ReactUtilityTable
            data={mockData}
            columns={[
              { title: "Name", field: "first_name", filtering: false },
              { title: "Last Name", field: "last_name" },
              { title: "Age", field: "age", sorter: (a, b) => a.age - b.age },
            ]}
            options={{
              pageSize: 4,
              headerStyle: {
                backgroundColor: "#2f569d",
                color: "#FFF",
              },
              rowStyle: (rowData) => ({
                color: rowData.age === 20 ? "blue" : "black",
              }),
              allBorder: true,
              filtering: true,
              exportButton: true,
            }}
          />
        </div>
      );
    }`;
 
  return (
    <>
      <div>
        <p style={{ margin: "10px 0px", color: "#5c5454" }}>
          <strong>Basic example</strong> : Pass <strong>columns</strong> and <strong> data </strong> to the React-Utitlity-Table
        </p>

      <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
        <ReactUtilityTable
              data={[
                { "first_name": "Dwayne", "last_name": "Johnson","email": "DwayneJohnson@gmail.com" },
                { "first_name": "John", "last_name": "Cena", "email": "JohnCena@gmail.com" },
                { "first_name": "Randy", "last_name": "Orton","email": "RandyOrton@gmail.com" },
                { "first_name": "Roman", "last_name": "Reign", "email": "RomanReign@gmail.com" },
              ]}
              columns={[
                { title: "Name", field: "first_name", filtering: false },
                { title: "Last Name", field: "last_name" },
                { title: "Email", field: "email" },
              ]}
              emptyDataMessage={
                <div>
                <input type={"checkbox"} /> No data found 
                </div>
              }
              options={{
                toolbar: false,
                pageSize: 10,
                maxBodyHeight: "15rem",
                minBodyHeight: "18.2rem",
                headerStyle: {
                  backgroundColor: '#c0a4fb',
                  color: '#FFF'
              },
                // paging:false,                  
              }}
              //for typescript onRowClick={(evt: any, rowClick: any) => console.log(rowClick, "selectedRow")}
              onRowClick={(evt, rowClick) => console.log(rowClick, "rowClicked")}
            />
        </Grid>
        <Grid item xs={6}>
        <ReactUtilityTable
              data={[
                { first_name: "Dwayne", last_name: "Johnson", age: 48 },
                { first_name: "John", last_name: "Cena", age: 46 },
                { first_name: "Randy", last_name: "Orton", age: 45 },
                { first_name: "Roman", last_name: "Reign", age: 38 },
                { first_name: "Brock", last_name: "Lesnar", age: 50 },
                { first_name: "Roundy", last_name: "Rousey", age: 46 },
              ]}
              columns={[
                { title: "Name", field: "first_name", filtering: false },
                { title: "Last Name", field: "last_name" },
                { title: "Age", field: "age", sorter: (a:any, b:any) => a.age - b.age },
              ]}
              options={{
                pageSize: 3,
                maxBodyHeight: "15rem",
                minBodyHeight: "15rem",
                rowStyle: (rowData) => ({
                  color: rowData.age === 20 ? "blue" : "black",
                }),
                headerStyle: {
                  backgroundColor: '#c0a4fb',
                  color: '#FFF'
              },
                allBorder: true,
                filtering: true,
                exportButton: true,
              }}
            />
        </Grid>
        
      </Grid>
    </Box>
      </div>
    </>
  );
};

export default Install;