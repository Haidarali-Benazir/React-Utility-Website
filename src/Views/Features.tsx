
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`horizontal-tabpanel-${index}`}
            aria-labelledby={`horizontal-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `horizontal-tab-${index}`,
        'aria-controls': `horizontal-tabpanel-${index}`,
    };
}



export default function ScrollableTabsButtonAuto() {

    const simpleEx = require('../Images/SimpleExample.PNG');
    const editable = require('../Images/Editable.PNG');
    const optionFeature = require('../Images/Options.PNG');
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };


    return (
        <>
            <Typography gutterBottom variant="h4">
                Features
            </Typography>
            <Typography variant="h6">
                Coming to features React-utility-table complies with all the crud operations.
            </Typography>

            <Box sx={{ maxWidth: "100%", bgcolor: 'background.paper' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    style={{background: "#d7e9eb"}}
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                >
                    <Tab label="Simple Example" {...a11yProps(0)} />
                    <Tab label="Editable" {...a11yProps(1)} />
                    <Tab label="Options" {...a11yProps(2)} />
                    {/* <Tab label="Item Four" {...a11yProps(3)} /> */}

                </Tabs>
                <TabPanel value={value} index={0}>
                    <div>
                        <p>
                            Pass Columns and Data to the React-Utitlity-Table
                            <br></br>
                            Below is the example of basic usage:
                        </p>
                        <img src={simpleEx} />
                    </div>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <div>
                        <p>
                            Below is the example for editable:
                            <br></br>
                            <strong> onRowAdd</strong> for Add,
                            <strong> onRowUpdate</strong> for Update or Edit,
                            <strong> onRowDelete</strong> for deleting row:
                        </p>
                        <img src={editable} />

                    </div>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <div>
                        <p>
                            Below is the example for additional features:
                            <br></br>
                            <strong>filtering</strong> : for filtering the values in the table.
                            <br></br>
                            <strong>exportButton</strong> : for excel download button to appear that allows to download the list in excel.
                        </p>
                        <img src={optionFeature} />

                    </div>
                </TabPanel>
                {/* <TabPanel value={value} index={3}>
                    Item Four
                </TabPanel>
                <TabPanel value={value} index={4}>
                    Item Five
                </TabPanel>
                <TabPanel value={value} index={5}>
                    Item Six
                </TabPanel>
                <TabPanel value={value} index={6}>
                    Item Seven
                </TabPanel> */}
            </Box>
        </>
    );
}
