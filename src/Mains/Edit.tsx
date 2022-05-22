

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
      const [tableData, setTableData] = React.useState([{
        "first_name": "Dmitri",
        "last_name": "Pickburn",
        "email": "dpickburn0@google.fr"
      },
      {
        "first_name": "Darelle",
        "last_name": "Whitlow",
        "email": "dwhitlow1@tumblr.com"
      }]);

      return (
        <div>
          <ReactUtilityTable
            data={tableData} 
            columns={[
              { title: "Name", field: "first_name", editable: false },
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
                    setTableData([...tableData, newData]);
                    resolve();
                  }, 1000)
                }),
              onRowUpdate: (newData, oldData) =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    const dataUpdate = [...tableData];
                    const index = oldData.tableData.id;
                    dataUpdate[index] = newData;
                    setTableData([...dataUpdate]);
                    resolve();
                  }, 1000)
                }),
              onRowDelete: (oldData) =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    const dataDelete = [...tableData];
                    const index = oldData.tableData.id;
                    dataDelete.splice(index, 1);
                    setTableData([...dataDelete]);
                    resolve();
                  }, 1000)
                })
            }} />
        </div>
      );
    }`
  return (
    <>
    
      <LiveProvider code={code}
        scope={scope}
        theme={theme}
      >
        <Layout code={
          <LiveEditor />
        }
          ui={
            <LivePreview />
          }
        />
        <LiveError />
      </LiveProvider>
    </>
  )
}
