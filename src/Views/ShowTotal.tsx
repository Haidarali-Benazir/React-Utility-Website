import React from "react";
import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live";
import { ReactUtilityTable } from "react-utility-table";
import Layout from "../Components/Layout";
import theme from "prism-react-renderer/themes/nightOwl";
import RefreshIcon from '@mui/icons-material/Refresh';

export default function ShowTotal() {
  const scope = { ReactUtilityTable,RefreshIcon };

  return (
    <>
      <LiveProvider
        code={`

        //import React from 'react';
        //import { ReactUtilityTable } from 'react-utility-table';
        function demo() {
          const [mockData, setMockData] = React.useState([
            {
              first_name: "Dwayne",
              credit: 700,
            },
            {
              first_name: "John",
              credit: 650,
            },
            {
              first_name: "Randy",
              credit: 800,
            },
          ]);
          return (
            <div>
              <ReactUtilityTable
                data={mockData}
                columns={[
                  { title: "Name", field: "first_name" },
                  { title: "Credit Amount", field: "credit", type: "number", total: "2150" },
      
                ]}
                actions={<RefreshIcon style={{color:'gray', marginTop:"5px"}}/>}
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
        }
        `}
        scope={scope}
        theme={theme}
      >
        <LiveError className="error" />
        <Layout code={<LiveEditor />} ui={<LivePreview />} />
      </LiveProvider>
    </>
  );
}
