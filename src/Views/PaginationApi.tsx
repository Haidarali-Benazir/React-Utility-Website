import React from "react";
import Layout from "../Components/Layout";
import { Sandpack } from "@codesandbox/sandpack-react";

const PaginationApi = () => {
  const code = `import { ReactUtilityTable } from "react-utility-table";
    export default function App() {
      return (
        <div>
          <ReactUtilityTable          
            columns={[
              { title: "ID", field: "id" },
              { title: "Name", field: "first_name" },
              { title: "Avatar", field: "avatar", render: rowData => (
                <img
                  style={{ height: 36, borderRadius: '50%' }}
                  src={rowData.avatar}
                />
              ), },
            ]}
            options={{
                pageSize: 4,
                globalSearch: false,
              }}
            queryData={(query) =>
                new Promise(async (resolve, reject) => {
                  let url = "https://reqres.in/api/users?";
                  url += "per_page=" + query.pageSize;
                  url += "&page=" + query.page;
                  await fetch(url)
                    .then((response) => response.json())
                    .then((result) => {
                      resolve({
                        totalCount: result.total,
                        data: result.data,
                      });
                    });
                })
            }
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
            "react-utility-table": "2.1.0",
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
};

export default PaginationApi;
