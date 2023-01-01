import { Grid, Tab, Tabs } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import PropTypes from 'prop-types';
import Header from './Components/Header';
import Dashboard from './Views/Dashboard';
import Edit from './Views/Edit';
import Filter from './Views/Filter';
import Selection from './Views/Selection';
import Styling from './Views/Styling';
import ExportExcel from './Views/ExcelDownload';
import Others from './Views/Others';
import ShowTotal from './Views/ShowTotal';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ApiCall from './Views/ApiCall';

function TabPanel(props: any) {

  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};


const App = () => {

  const [value, setValue] = React.useState(0);



  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

  return (
    <div style={{ height: "100vh", position: "relative" }} className="app">
      <Grid container >
        <Header />

        {/* <Box sx={{ width: '100%', boxShadow: "0px 4px 20px #0000001a", }} >
          <Tabs value={value} onChange={handleChange} className="db-tabs" variant="scrollable"
            scrollButtons="auto" allowScrollButtonsMobile
            aria-label="scrollable auto tabs example" color="#fff">
            <Tab label="Welcome" />
            <Tab label="Edit" />
            <Tab label="Api Call" />
            <Tab label="Styling" />
            <Tab label="Filter" />
            <Tab label="Selection" />
            <Tab label="Excel Download" />
            <Tab label="Summary" />
            <Tab label="Other Feature" />
          </Tabs>
          
        </Box> */}
        <Grid item xs={12} className="top-margin-tabs"  >
          <TabPanel value={value} index={0}>
            <Dashboard />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Edit />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <ApiCall />


          </TabPanel>
          <TabPanel value={value} index={3}>
            <Styling />

          </TabPanel>

          <TabPanel value={value} index={4}>
            <Filter />

          </TabPanel>

          <TabPanel value={value} index={5}>
            <Selection />

          </TabPanel>
          <TabPanel value={value} index={6}>
            <ExportExcel />

          </TabPanel>
          <TabPanel value={value} index={7}>
            <ShowTotal />

          </TabPanel>
          <TabPanel value={value} index={8}>

            <Others />
          </TabPanel>
        </Grid>

      </Grid>
      {/* <footer style={{ position: "fixed", width: "100%", }}>
        <div style={{ padding: "5px 10px", display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
          Created by &nbsp;<LinkedInIcon /> &nbsp;<a href={"https://www.linkedin.com/in/benazir-mulla/"}>  Benazir </a>
          &ensp; and&ensp; <LinkedInIcon /> &nbsp; <a href={"https://www.linkedin.com/in/haidaralichamcham/"}> Haidarali </a></div>
      </footer> */}
    </div>
  );
}

export default App;
