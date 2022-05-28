

import React from 'react'
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live';
import { ReactUtilityTable } from 'react-utility-table';
import Layout from '../Components/Layout';
import theme from 'prism-react-renderer/themes/nightOwl';

export default function Edit() {
  const scope = { ReactUtilityTable };
  const code =
    `   //import React from 'react';
    //import { ReactUtilityTable } from 'react-utility-table';
    function demo() {
      const [mockData, setMockData] = React.useState([
        {
          "first_name": "Dmitri",
          "last_name": "Pickburn",
          "email": "dpickburn0@google.fr",
          "credit": 2,
        },
        {
          "first_name": "Darelle",
          "last_name": "Whitlow",
          "email": "dwhitlow1@tumblr.com",
          "credit": 5,
        }]);
  
      return (
        <div>
          <ReactUtilityTable
            data={mockData}
            columns={[
              { title: "Name", field: "first_name", editable: false },
              { title: "Credit", field: "credit", type: "number" },
              {
                title: "Last Name", field: "last_name",
                render: (rowData) =>
                  <input value={rowData.first_name} type="button"
                    onClick={() =>
                      alert(rowData.first_name
                        + " " + rowData.last_name)} />
              },
              {
                title: "Email", field: "email", editComponent: props => (
                  <input
                    type="text"
                    value={props.value}
                    onChange={e => props.onChange(e.target.value)}
                  />
                )
              }
            ]}
            editable={{
              onRowAdd: (newData) =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    setMockData([...mockData, newData]);
                    resolve();
                  }, 1000)
                }),
              onRowUpdate: (newData, oldData) =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    const dataUpdate = [...mockData];
                    const index = oldData.tableData.id;
                    dataUpdate[index] = newData;
                    setMockData([...dataUpdate]);
                    resolve();
                  }, 1000)
                }),
              onRowDelete: (oldData) =>
                new Promise((resolve, reject) => {
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
        </div>
      )} `




  return (
    <>

      <LiveProvider code={code}
        scope={scope}
        theme={theme}
      >
         <LiveError className='error'/>
        <Layout code={
          <LiveEditor />
        }
          ui={
            <LivePreview />
          }
        />
     
      </LiveProvider>
    </>
  )
}
