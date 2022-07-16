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
        <Install />
      </div>
    </>

  );
};

export default Dashboard;