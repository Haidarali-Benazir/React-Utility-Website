import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React from 'react';

import Install from './Install';

const Dashboard = (props: any) => {

  return (
    <>
        <div style={{display: "flex", gap:"2rem", marginTop: "0.5rem"}}>
            <div className='imageindiv'>
              <p style={{ margin: "5px 0px", color: "#5c5454" }}>
                This utility-table is built with <strong>React, HTML5, CSS3 </strong> and <strong>Typescript</strong>.
                <br></br>
                It allows all the <strong>CRUD operation</strong> to be done that a table must have features with <strong>Excel Download option and much more...</strong>.
              </p>
            </div>
            <div className='imageindiv'>
              <p style={{ margin: "5px 0px", color: "#5c5454" }}>
                <strong> Installation---  Getting Started! </strong>
                <br></br>
                Install this package : <a href="https://www.npmjs.com/package/react-utility-table" >npm i react-utility-table </a>
                or <a href="https://www.npmjs.com/package/react-utility-table" >click here</a>
              </p>
            </div>
          </div>

      {/* <img className='imageindiv' src={process.env.PUBLIC_URL+ "/rut.jpeg"}/> */}
      <div style={{ marginTop: "1rem" }}>
        <Install />
        <p style={{ margin: "5px 0px", color: "#5c5454" }}>
          {/* <strong> Getting Started! </strong>
        <br></br>
        Install this package : <a href="https://www.npmjs.com/package/react-utility-table" >npm i react-utility-table </a>
        or <a href="https://www.npmjs.com/package/react-utility-table" >click here</a> */}
        </p>
      </div>
    </>

  );
};

export default Dashboard;