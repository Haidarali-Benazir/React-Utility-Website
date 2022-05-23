

import React from 'react'
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live';
import { ReactUtilityTable } from 'react-utility-table';
import Layout from '../Components/Layout';
import theme from 'prism-react-renderer/themes/nightOwl'


export default function ExportExcel() {
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
              title="Excel Download"
                data={tableData} 
                columns={[
                  { title: "Name", field: "first_name" },
                  {title: "Last Name", field: "last_name",  },
                  {title: "Email", field: "email", },
                ]}
                options={{
                    exportButton:true ,
                    // exportFileName:"example"   default title is set            
                }}
                
           
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
