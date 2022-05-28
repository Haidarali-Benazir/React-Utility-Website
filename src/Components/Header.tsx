import React from 'react'
import {  Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LogoIcon from '../Icons/LogoIcon';
export default function Header() {
    return (
        <header style={{
            display: "flex", justifyContent: "space-between", alignItems: "center",
            width: "inherit", margin: ".4rem 2rem", gap: "1rem"
        }}>
            <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
                <LogoIcon />
              <a target={'_blank'} href="https://www.npmjs.com/package/react-utility-table" style={{textDecoration:"none"}}> <Typography variant="h5" gutterBottom component="div" style={{ margin: "0px", color:"#000",  }} >
                    React Utility Table
                </Typography></a> 
            </div>

            <div style={{ display: "flex", gap: ".8rem" }}>
                <a target={'_blank'} href="https://github.com/Haidarali-Benazir/react-utility-table"><GitHubIcon /></a>
                {/* <LinkedInIcon />
                <PowerSettingsNewIcon /> */}
            </div>

        </header>
    )
}
