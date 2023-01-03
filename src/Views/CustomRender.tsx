import React from "react";
import Layout from "../Components/Layout";
import { Sandpack } from "@codesandbox/sandpack-react";

const CustomRender = () => {
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
        <ReactUtilityTable
          data={mockData}
          columns={[
            {
              title: "Name",
              field: "first_name",
              render: (rowData) => (
                <input
                  value={rowData.first_name}
                  type="button"
                  onClick={() =>
                 alert(rowData.first_name + " " + rowData.last_name)
                  }
                />
              ),
            },
            {
             title: "Last Name",
             field: "last_name",
         headRender: (title) => <input value={title} type="button" />,
            },
            { title: "Age", field: "age",
             sorter: (a, b) => a.age - b.age },
          ]}
          options={{
            pageSize: 4,
          }}
        />
      );
    }`;
  return (
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
  );
};

export default CustomRender;
