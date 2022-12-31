

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
          const [mockData, setMockData] = React.useState([
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
           ]);
          return (
            <div>
              <ReactUtilityTable
                title="Excel Download"
                data={mockData}
                columns={[
                  { title: "Name", field: "first_name" },
                  { title: "Last Name", field: "last_name", },
                  { title: "Email", field: "email", },
                ]}
                options={{
                  exportButton: true,
                  // exportFileName:"example"   default title is set            
                }}
              />
            </div>
          );}         
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
