

import React from 'react'
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live';
import { ReactUtilityTable } from 'react-utility-table';
import Layout from '../Components/Layout';
import theme from 'prism-react-renderer/themes/nightOwl'
import { Sandpack } from '@codesandbox/sandpack-react';


export default function ExportExcel() {
  const code =`import { ReactUtilityTable } from 'react-utility-table';
  export default function App() {
    return (
      <div>
        <ReactUtilityTable
          title="Excel Download"
          data={[
            {
              first_name: "Dwayne",
              last_name: "Johnson",
              email: "DwayneJohnson@gmail.com",
            },
            {
              first_name: "John",
              last_name: "Cena",
              email: "JohnCena@gmail.com",
            },
          ]}
          columns={[
            { title: "Name", field: "first_name" },
            { title: "Last Name", field: "last_name" },
            { title: "Email", field: "email" },
          ]}
          options={{
            exportButton: true,
            // exportFileName:"example"   default title is set
          }}
        />
      </div>
    );
  }`

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
    
{/* 
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
      
      </LiveProvider> */}


    </>
  )
}
