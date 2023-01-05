import React, { useState } from "react";
import theme from "prism-react-renderer/themes/nightOwl";
import { ReactUtilityTable } from "react-utility-table";
import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live";
import Layout from "../Components/Layout";
import { Sandpack } from "@codesandbox/sandpack-react";
import { Box, Grid } from "@mui/material";
import Switch from '@mui/material/Switch';

const Install = (props: any) => {
  const [hideData, setHideData] = useState(false);
  const [mockData, setMockData] = useState([
    {
      first_name: "Brock",
      last_name: "Lesnar",
      email: "brocklesnar@gmail.com",
    },
    {
      first_name: "Dwayne",
      last_name: "Johnson",
      email: "DwayneJohnson@gmail.com",
    },
    {
      first_name: "John",
      last_name: "Cena",
      email: "JohnCena@gmail.com",
    },
   
  ])
  const label = { inputProps: { 'aria-label': 'Switch demo' } };


  return (
    <>
      <div>
        <p style={{ margin: "10px 0px", color: "#5c5454" }}>
          <strong>Basic example</strong> : Pass <strong>columns</strong> and{" "}
          <strong> data </strong> to the React-Utitlity-Table
        </p>

       
          <Grid
            container
            rowSpacing={1}
            style={{justifyContent:"center"}}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={11} md={6}>
              <ReactUtilityTable
              title={"Crud Operation"}
                data={
                  hideData
                    ? mockData
                    : []
                }
                columns={[
                  { title: "Name", field: "first_name", filtering: false },
                  { title: "Last Name", field: "last_name" },
                  { title: "Email", field: "email" },
                ]}
                emptyDataMessage={
                  <div onClick={()=>setHideData(true)} style={{cursor:"pointer"}}>
                    <Switch {...label} />Click here to view Data
                  </div>
                }
                options={{
                  // toolbar: false,
                  pageSize: 5,
                  // headerStyle: {
                  //   backgroundColor: "rgb(91, 42, 239)",
                  //   color: "#FFF",
                  // },
                  // paging:false,
                }}
                //for typescript onRowClick={(evt: any, rowClick: any) => console.log(rowClick, "selectedRow")}
                onRowClick={(evt, rowClick) =>
                  console.log(rowClick, "rowClicked")
                }
                editable={{
                  onRowAdd: (newData:any) =>
                    new Promise((resolve:any, reject) => {
                      setTimeout(() => {
                        setMockData([...mockData, newData]);
                        resolve();
                      }, 1000)
                    }),
                  onRowUpdate: (newData:any, oldData:any) =>
                    new Promise((resolve:any, reject) => {
                      setTimeout(() => {
                        const dataUpdate = [...mockData];
                        const index = oldData.tableData.id;
                      
                        dataUpdate[index] = newData;
                        setMockData([...dataUpdate]);
                        resolve();
                      }, 1000)
                    }),
                  onRowDelete: (oldData:any) =>
                    new Promise((resolve:any, reject) => {
                      setTimeout(() => {
                        const dataDelete = [...mockData];
                        const index = oldData.tableData.id;
                        dataDelete.splice(index, 1);
                        setMockData([...dataDelete]);
                        resolve();
                      }, 1000)
                    })
                }}
              />
            </Grid>
            <Grid item xs={11} md={6}>
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
                  {
                    title: "Age",
                    field: "age",
                    sorter: (a: any, b: any) => a.age - b.age,
                  },
                ]}
                options={{
                  pageSize: 3,
                  maxBodyHeight: "15rem",
                  minBodyHeight: "15rem",
                  rowStyle: (rowData) => ({
                    color: rowData.age === 20 ? "blue" : "black",
                  }),
                  // headerStyle: {
                  //   backgroundColor: "rgb(92 33 217)",
                  //   color: "#FFF",
                  // },
                  // allBorder: true,
                  filtering: true,
                  exportButton: true,
                }}
              />
            </Grid>
          </Grid>
    
      </div>
    </>
  );
};

export default Install;
