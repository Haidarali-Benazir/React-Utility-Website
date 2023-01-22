

import React from 'react'
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live';
import { ReactUtilityTable } from 'react-utility-table';
import Layout from '../Components/Layout';
import theme from 'prism-react-renderer/themes/nightOwl';
import { Sandpack } from '@codesandbox/sandpack-react';

export default function Edit() {
  const scope = { ReactUtilityTable };
  const code =
    `import React from 'react';
    import { ReactUtilityTable } from 'react-utility-table';
   export default function App() {
      const [mockData, setMockData] = React.useState([
        { first_name: "Roman", credit: 700, last_name: "Reign"},
        {first_name: "Brock", credit: 750,last_name: "Lesnar"},
        { first_name: "John", credit: 700, last_name: "Cena"},
       ]);
  
      return (
        <div>
        <ReactUtilityTable
          data={mockData}
          columns={[
            { title: "Name", field: "first_name", editable: false },
            {
              title: "Credit",
              field: "credit",
              type: "number",
              sorter: (a, b) => a.credit - b.credit,
            },
            {
              title: "Last Name",
              field: "last_name",
              editComponent: (props) => (
                <input
                  type="text"
                  value={props.value}
                  onChange={(e) => props.onChange(e.target.value)}
                />
              ),
            },
          ]}

          // crudIcons={{
            // edit: <span>Edit</span>,
            // cancel: <span>Cancel </span>,
            // deleteIcon: <span>Delete </span>,
            // save: <span>Save </span>
          // }}

          //disableCrudTooltip={true}

          options={{
            //  actionCellPositonStart:false,
  // deleteRowText:"Are you sure you want to delete this user ?",
            tooltipDescText: "Descending Order",
            tooltipAscText: "Ascending Order",
          }}
          editable={{
            onRowAdd: (newData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  setMockData([...mockData, newData]);
                  resolve();
                }, 1000);
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  const dataUpdate = [...mockData];
                  const index = oldData.tableData.id;
                  if (newData.credit === oldData.credit) {
            alert("This is how we can have validations example value of Credit should be different from previous value." );
                    reject(); //for validation field example
                  }
                  dataUpdate[index] = newData;
                  setMockData([...dataUpdate]);
                  resolve();
                }, 1000);
              }),
            onRowDelete: (oldData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  const dataDelete = [...mockData];
                  const index = oldData.tableData.id;
                  dataDelete.splice(index, 1);
                  setMockData([...dataDelete]);
                  resolve();
                }, 1000);
              }),
          }}
        />
      </div>
      )} `




  return (
    <>
      <p style={{ margin: "5px 0px" }}>
        <strong>PlayGround for editable: </strong>
        <br />
        <br />
      </p>
      <Sandpack
        // theme={theme}
        template="react"
        files={{
          "/App.js": code,
        }}
        customSetup={{
          dependencies: {
            react: "18.0.0",
            "react-dom": "18.0.0",
            "react-scripts": "5.0.1",
            "react-utility-table": "2.1.1",
          },
        }}
        theme="dark"
        options={{
          showLineNumbers: true, // default - true
          editorHeight: 500, // default - 300
        }}
      />

      {/* <LiveProvider code={code}
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
     
      </LiveProvider> */}
    </>
  )
}
