import React from "react";
import { Sandpack } from "@codesandbox/sandpack-react";

export default function FixedColumn() {
  const code = `
import { ReactUtilityTable } from 'react-utility-table';
  export default function App() {
 
    return (
      <div>
        <ReactUtilityTable
          data={ [
            { first_name: "Brock", last_name: "Lesnar",  location:"Mexico", profession:"Wrestler", email: "brockLesnar@gmail.com" },
            { first_name: "John", last_name: "Cena", location:"United State of America", profession:"Wrestler & Actor", email: "RandyOrton@gmail.com" },
            { first_name: "Great", last_name: "Khali", location:"India", profession:"Wrestler", email: "RomanReign@gmail.com" },
          ]}
          columns={[
            {
                title: "Name",
                field: "first_name",
                thStyle: { backgroundColor: "#f5f5f5", position: "sticky", left: "0px" },
                cellStyle: (rowData) => ({
                  maxWidth: "50px",
                  backgroundColor: "#fff",
                  position: "sticky",
                  left: "0px",
                }),
              },
              {
                title: "Last Name",
                field: "last_name",
                thStyle: { backgroundColor: "#f5f5f5", position: "sticky", left: "62px" },
                cellStyle: (rowData) => ({
                  minWidth: "50px",
                  backgroundColor: "#fff",
                  position: "sticky",
                  left: "62px",
                  minWidth: "90px",
                }),
              },
              {
                title: "Location",
                field: "location",
                cellStyle: (rowData) => ({ minWidth: "150px" }),
              },
              {
                title: "Profssion",
                field: "profession",
                cellStyle: (rowData) => ({ minWidth: "150px" }),
              },
              { title: "Email", field: "email" },
          ]}
          
          actions={<button>Click</button>}

         
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
            "react-utility-table": "2.1.0",
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
