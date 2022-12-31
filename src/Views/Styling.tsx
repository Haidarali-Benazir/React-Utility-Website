

import React from 'react'
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live';
import { ReactUtilityTable } from 'react-utility-table';
import Layout from '../Components/Layout';
import theme from 'prism-react-renderer/themes/nightOwl'


export default function Styling() {
    const scope = { ReactUtilityTable };


    return (
        <>
            <LiveProvider code={`
        //import React from 'react';
        //import { ReactUtilityTable } from 'react-utility-table';

        function demo() {
            const [tableData, setTableData] = React.useState([ 
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
                data={tableData}
                columns={[
                    { title: "Name", field: 'first_name',thStyle:{backgroundColor:"blue",color:"#fff"} },
                    { title: "Last Name", field: "last_name" },        
                   
                    { title: "Email", field: "email", 
                    cellStyle: (rowData) => ({backgroundColor:"rgb(241 187 33 / 55%)",  color: rowData.first_name ==="Randy"? "red" :"green"}) },
                ]}
                options={{
                    headerStyle: {
                        backgroundColor: '#5b2aef',
                        color: '#FFF'
                    },
                    toolbarStyle: {
                        backgroundColor: '#5b2aef',
                        color: '#FFF'
                    },
                    
                    globalSearch:false
                }}


            />
                </div>
            );
        }
        `}
                scope={scope}
                theme={theme}
            >
                <LiveError className='error' />
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
