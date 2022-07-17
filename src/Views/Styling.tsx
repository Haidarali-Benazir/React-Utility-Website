

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
                    { title: "Name", field: 'first_name', },
                    { title: "Last Name", field: "last_name", },        
                   
                    { title: "Email", field: "email", 
                    cellStyle: { backgroundColor: "#253e85", color: "#fff"} },
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
