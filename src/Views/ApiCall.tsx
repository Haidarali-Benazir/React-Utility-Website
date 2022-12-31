

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
                    first_name: "Brock",
                    last_name: "Lesner",
                    email: "BrockLesnar@gmail.com",
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
                  },
        
            ]);
        
            const [stopScroll, setStopScroll] = React.useState(false);
        
            const apiCall = (oldData) => {
        
                setMockData([...oldData, {
                    first_name: "Dwayne",
                    last_name: "Johnson",
                    email: "DwayneJohnson@gmail.com",
                  },
                  {
                    first_name: "John",
                    last_name: "Cena",
                    email: "JohnCena@gmail.com",
                  },])
        
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
                    paging: false,  
//paging should be always false when onScrollFetch is called
                    maxBodyHeight: '8rem' ,
 //always prefer to give height for scroll effect
                    showSerialNo:true,
//incase if you want to serial no/counting
                    //serialNoTitle:"Sr No",
                    
                    // scollStopTextStyle: {
                    //     backgroundColor: '#01579b',
                    //     color: '#FFF'
                    //   },
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
