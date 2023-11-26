import React from "react";
import { Sandpack } from "@codesandbox/sandpack-react";

export default function Others() {
  const code = `import React from 'react';
import { ReactUtilityTable } from 'react-utility-table';
  export default function App() {
    const [mockData, setMockData] = React.useState([
      { first_name: "John", last_name: "Cena", email: "JohnCena@gmail.com" },
      { first_name: "Randy", last_name: "Orton", email: "RandyOrton@gmail.com" },
      { first_name: "Roman", last_name: "Reign", email: "RomanReign@gmail.com" },
    ]);

    const [showData, setShowData] = React.useState(false);
    return (
      <div>
        <ReactUtilityTable
          data={ showData ? mockData:[]}
          columns={[
            { title: "Name", field: "first_name" },
            { title: "Last Name", field: "last_name", filtering: false },
            { title: "Email", field: "email" },
          ]}
          emptyDataMessage={
            <div onClick={()=>setShowData(true)} style={{cursor:"pointer"}}>
             <span style={{color:"blue"}}>Click</span> here to view Data
            </div>
          }
          options={{
            toolbar: false,
            pageSize: 10,
            maxBodyHeight: "15rem",
            minBodyHeight: "10rem",
            allBorder:true,
            // paging:false,
          }}
          //for typescript onRowClick={(evt: any, rowClick: any) => console.log(rowClick, "selectedRow")}
          onRowClick={(evt, rowClick) => console.log(rowClick, "rowClicked")}
        />
      </div>
    );
  }`;
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
            "react-utility-table": "2.1.4",
          },
        }}
        theme="dark"
        options={{
          showLineNumbers: true, // default - true
          editorHeight: 500, // default - 300
        }}
      />
    </>
  );
}
