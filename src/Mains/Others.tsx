

import React from 'react'
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live';
import { ReactUtilityTable } from 'react-utility-table';
import Layout from '../Components/Layout';
import theme from 'prism-react-renderer/themes/nightOwl'


export default function Others() {
  const scope = { ReactUtilityTable };

  return (
    <>

      <LiveProvider code={`
//import React from 'react';
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
          { title: "Name", field: "first_name" },
          { title: "Name", field: "last_name", filtering: false },
          { title: "Name", field: "email", },
        ]}
        options={{
          toolbar: false,
          pageSize: 10,
          maxBodyHeight: "15rem",
          minBodyHeight: "10rem",
          // paging:false,                  
        }}
        //for typescript onRowClick={(evt: any, rowClick: any) => console.log(rowClick, "selectedRow")}
        onRowClick={(evt, rowClick) => console.log(rowClick, "selectedRow")}
      />
    </div>
  );
}
        `}
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
