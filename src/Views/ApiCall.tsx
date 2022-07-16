

import React from 'react'
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live';
import { ReactUtilityTable } from 'react-utility-table';
import Layout from '../Components/Layout';
import theme from 'prism-react-renderer/themes/nightOwl'


export default function ApiCall() {
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
                },
                {
                    "first_name": "Brinston",
                    "last_name": "Roz",
                    "email": "brinston@tumblr.com"
                }
        
            ]);
        
            const [stopScroll, setStopScroll] = React.useState(false);
        
            const apiCall = (oldData) => {
        
                setMockData([...oldData, {
        
                    "first_name": "Fetch",
                    "last_name": "Data",
                    "email": "apiCall@tumblr.com"
                },
                {
                    "first_name": "Demo",
                    "last_name": "Data",
                    "email": "demo@tumblr.com"
                }])
        
                setStopScroll(true);
            }

            return (
                <div>
                <ReactUtilityTable
                data={mockData}
                columns={[
                    { title: "Name", field: "first_name" },
                    { title: "Last Name", field: "last_name", filtering: false },
                    { title: "Email", field: "email", },
                ]}

                options={{
                    paging: false,//paging should be always false when onScrollFetch is called
                    maxBodyHeight: '8rem' //always prefer to give height for scroll
                }}
                stopScrollFetch={stopScroll}
                stopScrollFetchText="You Reached to Bottom"
                
                onScrollFetch={(oldData) => new Promise((resolve, reject) => {
                    setTimeout(() => {

                        apiCall(oldData)

                        resolve();
                    }, 3000)
                })}

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
