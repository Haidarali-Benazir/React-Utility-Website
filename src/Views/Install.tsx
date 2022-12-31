import React from 'react';
import theme from 'prism-react-renderer/themes/nightOwl';
import { ReactUtilityTable } from 'react-utility-table';
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live';
import Layout from '../Components/Layout';


const Install = (props: any) => {
  
  // const simpleEx = require('../Images/SimpleExample.PNG');
  const scope = { ReactUtilityTable };
  const code =
    ` function demo() {
      const [mockData, setMockData] = React.useState([
        { "first_name": "Dwayne", "last_name": "Johnson","age": 48 },
        { "first_name": "John", "last_name": "Cena", "age": 46 },
        { "first_name": "Randy", "last_name": "Orton","age": 45 },
        { "first_name": "Roman", "last_name": "Reign", "age": 38 },
        { "first_name": "Brock", "last_name": "Lesnar","age": 50 },
        { "first_name": "Roundy", "last_name": "Rousey", "age": 46 }]);
      return (
        <div>
          <ReactUtilityTable data={mockData}
            columns={[
              { title: "Name", field: "first_name", filtering: false },             
              { title: "Last Name", field: "last_name" },
              { title: "Age", field: "age", sorter:(a,b)=> a.age - b.age} ,]}
            options={{
              pageSize:4,
              headerStyle: {
                backgroundColor: '#26c6da',
                color: '#FFF'
            },
            rowStyle: rowData => ({
              color: rowData.age === 20 ? 'blue' : "black"
            }),
              allBorder: true,
              filtering: true,
              exportButton: true
            }} />
        </div>)}`
 
  return (
    <>
      <p style={{ margin: "5px 0px", color: "#5c5454" }}>
        <strong> Installation---  Getting Started! </strong>
        <br></br>
        Install this package : <a href="https://www.npmjs.com/package/react-utility-table" >npm i react-utility-table </a>
        or <a href="https://www.npmjs.com/package/react-utility-table" >click here</a>
      </p>
      <div>
        <p style={{ margin: "5px 0px", color: "#5c5454" }}>
          <strong>Basic example</strong> : Pass <strong>columns</strong> and <strong> data </strong> to the React-Utitlity-Table
        </p>

        <LiveProvider code={code}
          scope={scope}
          theme={theme}
        >
           <LiveError className='error'/>
          <Layout showTitle={false} className="installation overide-hight" code={
            <LiveEditor />
          }
            ui={
              <LivePreview />
            }
          />
          
        </LiveProvider>
        {/* <img src={simpleEx} /> */}
      </div>
    </>
  );
};

export default Install;