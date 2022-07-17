

import React from 'react'
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live';
import { ReactUtilityTable } from 'react-utility-table';
import Layout from '../Components/Layout';
import theme from 'prism-react-renderer/themes/nightOwl'


export default function ShowTotal() {
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
              "credit": 3,      
            },
            {
              "first_name": "Darelle",
              "credit": 6,
            }]);
          return (
            <div>
              <ReactUtilityTable
                data={mockData}
                columns={[
                  { title: "Name", field: "first_name" },
                  { title: "Credit Amount", field: "credit", type: "number", total: "9" },
      
                ]}
                options={{
                  showTotal: true,
                  focusRow: true, 
//onTab will work on row on Space or Enter button press onRowClick will fire
                  // totalRowClassName: "summary-class", 
// you can add your own class Name for last field
                  totalTitle: "Total Amount",
                }}
                onRowClick={(evt, rowClick) => console.log(rowClick, "selectedRow")}
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
