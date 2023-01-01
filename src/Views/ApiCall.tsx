import React from "react";
import Layout from "../Components/Layout";
import { Sandpack } from "@codesandbox/sandpack-react";

const PaginationApi = () => {
  const code = `import React from "react";
    import { ReactUtilityTable } from "react-utility-table";
    export default function App() {
        const [stopScroll, setStopScroll] = React.useState(false);
        const [mockData, setMockData] = React.useState([]);
      let page =0;
        
        React.useEffect(()=>{
            if(page === 0) apiCall(1, 6);
        },[])

        const apiCall =async(page, pageSize)=>{
            // parameters  are just example for only api's which required pagination
            if(page ===2 ){ setStopScroll(true);}
           
            let url = "https://reqres.in/api/users?";
            url += "per_page=" + pageSize;
            url += "&page=" + page;
            await fetch(url).then((response) => response.json())
              .then((result) => {         
                 setMockData([...mockData,...result.data]); 
             
              });
              
        }
        
      return (
        <div>
          <ReactUtilityTable         
          data={mockData} 
            columns={[
              { title: "ID", field: "id" },
              { title: "Name", field: "first_name" },
              { title: "Avatar", field: "avatar", render: rowData => (
                <img
                  style={{ height: 36, borderRadius: '50%' }}
                  src={rowData.avatar}
                />
              ), },
            ]}

            options={{
                paging: false,  
               //paging should be always false when onScrollFetch is called
               
               maxBodyHeight: '18rem' ,
             //always give  height for scroll effect
              
                showSerialNo:true,
                //incase if you want to serial no/counting
                //serialNoTitle:"Sr No",
                
                // scollStopTextStyle: {
                //     backgroundColor: '#01579b',
                //     color: '#FFF'
                //   },
            }}
            stopScrollFetch={stopScroll}  // for stoping scroll
            stopScrollFetchText="You Reached to Bottom"
                
                onScrollFetch={(oldData) => new Promise((resolve, reject) => {
                    setTimeout(() => {
                        apiCall(2,6)
                        resolve();
                    }, 3000)
                })}

          />
        </div>
      );
    }`;

  return (
    <Sandpack
      // theme={theme}
      template="react"
      files={{
        "/App.js": code,
      }}
      customSetup={{
        dependencies: {
          react: "18.0.0",
          "react-dom": "18.0.0",
          "react-scripts": "5.0.1",
          "react-utility-table": "2.1.0",
        },
      }}
      theme="dark"
      options={{
        showLineNumbers: true, // default - true
        editorHeight: 500, // default - 300
      }}
    />
  );
};

export default PaginationApi;
