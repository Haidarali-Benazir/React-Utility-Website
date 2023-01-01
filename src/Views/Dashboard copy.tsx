import React from 'react';

import Install from './Install';

const Dashboard = (props: any) => {

  return (
    <>
      <div>
        <p style={{margin: "5px 0px", color: "#5c5454"}}>
          This utility-table is built with <strong>React, HTML5, CSS3 </strong> and <strong>Typescript</strong>.
          <br></br>
          It allows all the <strong>CRUD operation</strong> to be done that a table must have features with <strong>Excel Download option</strong>.
        </p>
      </div>
      <div style={{ marginTop: "1rem" }}>
        {/* <Install /> */}
        <img style={{height:"20rem", width: "20rem", borderRadius: "10px"}} src={process.env.PUBLIC_URL+ "/rut.jpeg"}/>
        <p style={{ margin: "5px 0px", color: "#5c5454" }}>
        <strong> Getting Started! </strong>
        <br></br>
        Install this package : <a href="https://www.npmjs.com/package/react-utility-table" >npm i react-utility-table </a>
        or <a href="https://www.npmjs.com/package/react-utility-table" >click here</a>
      </p>
      </div>
    </>

  );
};

export default Dashboard;