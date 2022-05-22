import { Grid } from '@mui/material'
import React from 'react'

export default function Layout(props: any) {
    const { className = "overide-hight", ui, code, title = "PlayGround for editable:", showTitle = true } = props;
    return (
        <Grid container item xs={12} style={{ justifyContent: "space-between", gap: "1rem" }}>
            {showTitle && <Grid item xs={12}>
                <p style={{ margin: "5px 0px" }}>
                    <strong>{title}  </strong>
                </p>
            </Grid>}

            <Grid item md={5} className={className}>
                {code}
            </Grid>

            <Grid item md={6}>
                {ui}
            </Grid>
        </Grid>
    )
}
