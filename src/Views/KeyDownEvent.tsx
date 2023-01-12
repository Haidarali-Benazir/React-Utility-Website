import React from "react";
import { Sandpack } from "@codesandbox/sandpack-react";

export default function KeyDownEvent() {
  const code = `
import { ReactUtilityTable } from 'react-utility-table';
  export default function App() {
 
    return (
      <div>
        <ReactUtilityTable
          data={ [
            { first_name: "John", last_name: "Cena", email: "JohnCena@gmail.com" },
            { first_name: "Randy", last_name: "Orton", email: "RandyOrton@gmail.com" },
            { first_name: "Roman", last_name: "Reign", email: "RomanReign@gmail.com" },
          ]}
          columns={[
            { title: "Name", field: "first_name" },
            { title: "Last Name", field: "last_name", filtering: false },
            { title: "Email", field: "email" },
          ]}
          
          actions={<button>Click</button>}

          options={{
            focusRow: true,
            focusTimerInMilliSecond: 1000,
            //default timer is of 800ms for having focus on row 
            
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
