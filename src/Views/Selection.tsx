

import React from 'react'
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live';
import { ReactUtilityTable } from 'react-utility-table';
import Layout from '../Components/Layout';
import theme from 'prism-react-renderer/themes/nightOwl'


export default function Selection() {
  const scope = { ReactUtilityTable };


  return (
    <>

      <LiveProvider code={`

        //import React from 'react';
        //import { ReactUtilityTable } from 'react-utility-table';
        function demo() {
          const [mockData, setMockData] = React.useState([
            {
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
                data={mockData}
                columns={[
                  { title: "Name", field: "first_name" },
                  { title: "Last Name", field: "last_name", },
                  { title: "Email", field: "email", },
                ]}
                options={{
                  selection: true,
                  // selectAll:true,
                  // selectionTitle:"Check All"                   
                }}
                // for typescript onSelectionChange={(selectedRow: any) => console.log(selectedRow)}
                onSelectionChange={(selectedRow) => console.log(selectedRow)}
              />
            </div>
          );
        }
        `}
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
      
      </LiveProvider>


    </>
  )
}
