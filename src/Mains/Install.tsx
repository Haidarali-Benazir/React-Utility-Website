import React from 'react';
import theme from 'prism-react-renderer/themes/nightOwl';
import { ReactUtilityTable } from 'react-utility-table';
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live';
import Layout from '../Components/Layout';


const Install = (props: any) => {
  debugger
  // const simpleEx = require('../Images/SimpleExample.PNG');
  const scope = { ReactUtilityTable };
  const code =
    ` function demo() {
      const [mockData, setMockData] = React.useState([
        { "first_name": "Dmitri", "last_name": "Pickburn", },
        { "first_name": "Darelle", "last_name": "Whitlow", }]);
      return (
        <div>
          <ReactUtilityTable data={mockData}
            columns={[
              { title: "Name", field: "first_name", filtering: false },
              { title: "Last Name", field: "last_name" },]}
            options={{
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
          <Layout showTitle={false} className="installation" code={
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