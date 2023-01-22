import React from "react";
import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live";
import { ReactUtilityTable } from "react-utility-table";
import Layout from "../Components/Layout";
import theme from "prism-react-renderer/themes/nightOwl";
import RefreshIcon from "@mui/icons-material/Refresh";
import { Sandpack } from "@codesandbox/sandpack-react";

export default function ShowTotal() {
  const code = `import { ReactUtilityTable } from 'react-utility-table';
 export default function App() {
   
    return (
      <div>
        <ReactUtilityTable
          data={[
            {first_name: "Dwayne", credit: 700, },
            { first_name: "John", credit: 650, },
            { first_name: "Randy", credit: 800, },
          ]}
          columns={[
            { title: "Name", field: "first_name" },
            {
              title: "Credit Amount",
              field: "credit",
              type: "number",
              total: "2150",
            },
          ]}
          // actions={<RefreshIcon style={{ color: "gray", marginTop: "5px" }} />}
          options={{
            showTotal: true,
            focusRow: true,
            focusTimerInMilliSecond: 1000,
            //onTab will work on row on Space or Enter button press onRowClick will fire
            // totalRowClassName: "summary-class",
            // you can add your own class Name for last field
            totalTitle: "Total Amount",
          }}
          onRowClick={(evt, rowClick) => console.log(rowClick, "selectedRow")}
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
            "react-utility-table": "2.1.1",
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
