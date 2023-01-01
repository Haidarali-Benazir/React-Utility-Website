import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LogoIcon from '../Icons/LogoIcon';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';


export default function Header() {
    return (
         <header style={{
            width: "inherit", gap: "1rem", height: "3rem", boxShadow: "0 0 8px -1px rgb(0 0 0 / 25%)"
        }}>
        <MenuOpenIcon/>
        <div style={{ padding: "10px 10px", display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
        Created by &nbsp;<LinkedInIcon /> &nbsp;<a href={"https://www.linkedin.com/in/benazir-mulla/"}>  Benazir </a>
        &ensp; and&ensp; <LinkedInIcon /> &nbsp; <a href={"https://www.linkedin.com/in/haidaralichamcham/"}> Haidarali </a></div>
    
       
            {/* // <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
            //     <LogoIcon />
            //     <a target={'_blank'} href="https://www.npmjs.com/package/react-utility-table" style={{ textDecoration: "none" }}> <Typography variant="h5" gutterBottom component="div" style={{ margin: "0px", color: "#000", }} >
            //         React Utility Table
            //     </Typography></a>
            // </div>

            // <div style={{ display: "flex", gap: ".8rem" }}>
            //     <a target={'_blank'} href="https://github.com/Haidarali-Benazir/React-Utility-Website"><GitHubIcon /></a>
            //     <LinkedInIcon />
            //     <PowerSettingsNewIcon />
            // </div> */}

         </header>
    )
}
