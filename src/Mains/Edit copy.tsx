import { Grid } from '@mui/material'
import React from 'react'
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live';
import { ReactUtilityTable } from 'react-utility-table';
import Layout from '../Components/Layout';


export default function Edit() {
    const scope = { ReactUtilityTable };

    return (
        <>

            <LiveProvider code={`
             () => {
                const [tableData, setTableData] = React.useState([
{firstName:"Benazir", surname:"Chamcham"},
{firstName:"Haidarali", surname:"Chamcham"}
                ]);
            return (
              <div>
                <ReactUtilityTable
     data={tableData} columns={[
         {title:"Name",field:"firstName"}
     ]}
                />
              </div>
            );
            }
        `}
                scope={scope}
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
