import React from 'react'
import { Grid, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LogoIcon from '../Icons/LogoIcon';
export default function Header() {
    return (
        <header style={{
            display: "flex", justifyContent: "space-between", alignItems: "center",
            width: "inherit", margin: ".4rem 2rem", gap: "1rem"
        }}>
            <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
                <LogoIcon />
              <a href="https://www.npmjs.com/package/react-utility-table" style={{textDecoration:"none"}}> <Typography variant="h5" gutterBottom component="div" style={{ margin: "0px", color:"#000",  }} >
                    React Utility Table
                </Typography></a> 
            </div>

            <div style={{ display: "flex", gap: ".8rem" }}>
                <GitHubIcon />
                {/* <LinkedInIcon />
                <PowerSettingsNewIcon /> */}
            </div>

        </header>
    )
}
