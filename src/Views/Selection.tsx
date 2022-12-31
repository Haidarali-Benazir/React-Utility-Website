

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
              first_name: "Dwayne",
              last_name: "Johnson",
              email: "DwayneJohnson@gmail.com",
            },
            {
              first_name: "John",
              last_name: "Cena",
              email: "JohnCena@gmail.com",
            },
            {
              first_name: "Randy",
              last_name: "Orton",
              email: "RandyOrton@gmail.com",
            },
            {
              first_name: "Roman",
              last_name: "Reign",
              email: "RomanReign@gmail.com",
            },]);
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
                  disableSelectProps: (rowData) =>rowData.first_name === "Dmitri",
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
