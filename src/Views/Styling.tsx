import React from "react";
import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live";
import { ReactUtilityTable } from "react-utility-table";
import Layout from "../Components/Layout";
import theme from "prism-react-renderer/themes/nightOwl";
import { Sandpack } from "@codesandbox/sandpack-react";

export default function Styling() {
  const scope = { ReactUtilityTable };

  const code = `import { ReactUtilityTable } from 'react-utility-table';
export default function App() {

return (
<div>
  <ReactUtilityTable
    data={[ 
        {first_name: "John", last_name: "Cena", email: "JohnCena@gmail.com", },
        { first_name: "Randy", last_name: "Orton", email: "RandyOrton@gmail.com",},
        {first_name: "Roman", last_name: "Reign", email: "RomanReign@gmail.com",}
      ]}
    columns={[
      {
        title: "Name",
        field: "first_name",
        thStyle: { backgroundColor: "blue", color: "#fff" },
      },
      { title: "Last Name", field: "last_name" },

      {
        title: "Email",
        field: "email",
        cellStyle: (rowData) => ({
          backgroundColor: "rgb(241 187 33 / 55%)",
          color: rowData.first_name === "Randy" ? "red" : "green",
        }),
      },
    ]}
    options={{
      headerStyle: {
        backgroundColor: "#5b2aef",
        color: "#FFF",
      },
      toolbarStyle: {
        backgroundColor: "#5b2aef",
        color: "#FFF",
      },

      globalSearch: false,
    }}
  />
</div>
);
  }`;
  return (
    <div>
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
    </div>
  );
}
