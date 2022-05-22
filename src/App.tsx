import { Grid, Tab, Tabs, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';
import PropTypes from 'prop-types';
import Header from './Components/Header';
import Dashboard from './Mains/Dashboard';
import Edit from './Mains/Edit';
import Filter from './Mains/Filter';
import Selection from './Mains/Selection';
import Styling from './Mains/Styling';
import ExportExcel from './Mains/ExcelDownload';
import Others from './Mains/Others';

// import { makeStyles } from '@mui/styles';




// const useStyles = makeStyles({
//     root: {
//         width: "100%",
//         '& .Mui-selected': {
//             fontWeight: "bold",
//             color: "#fff !important",
//             backgroundColor: "#1E5491",
//             borderRadius: "20px"
//         },
//     },
// });
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

function a11yProps(index: any) {

  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
const App = () => {
  // const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [expanded, setExpanded] = React.useState(false);


  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
    // console.log(newValue,"newValue")
  };

  return (
    <div style={{ height: "100vh", position: "relative" }} className="app">
      <Grid container >
        <Header />


        {/* <Box sx={{ width: '100%', paddingBottom: ".8rem", boxShadow: "0px 4px 20px #0000001a" }} className={classes.root}> */}
        <Box sx={{ width: '100%', boxShadow: "0px 4px 20px #0000001a",}} >
          <Tabs value={value} onChange={handleChange} className="db-tabs" variant="scrollable"
            scrollButtons="auto" allowScrollButtonsMobile
            aria-label="scrollable auto tabs example" color="#fff">
            {/* <Tab icon={<DashboardOutlinedIcon />} label="Dashboard" /> */}
            <Tab label="Welcome" />
            <Tab label="Edit" />
            <Tab label="Styling" />
            <Tab label="Filter" />
            <Tab label="Selection" />
            <Tab label="Excel Download" />
            <Tab label="Other Feature" />

          </Tabs>
          {/* <Box>Logout </Box> */}
        </Box>
        <Grid item xs={12} className="top-margin-tabs" >
          <TabPanel value={value} index={0}>
            <Dashboard />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Edit />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Styling />

          </TabPanel>
          <TabPanel value={value} index={3}>
            <Filter />
          </TabPanel>

          <TabPanel value={value} index={4}>
            <Selection />
          </TabPanel>

          <TabPanel value={value} index={5}>
            <ExportExcel />
          </TabPanel>

          <TabPanel value={value} index={6}>
            <Others />
          </TabPanel>
        </Grid>

      </Grid>
      <footer style={{ position: "fixed", width: "100%", }}>
        <div style={{ padding: "5px 10px", textAlign: 'right' }}>Created by <a target={"_blank"} href={"https://www.linkedin.com/in/haidaralichamcham/"}> Haidarali </a>
        and <a target={"_blank"} href={"https://www.linkedin.com/in/benazir-mulla/"}> Benazir</a></div>
      </footer>
    </div>
  );
}

export default App;
