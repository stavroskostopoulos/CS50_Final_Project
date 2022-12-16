import React from 'react'

//import css
import '../css/Appbar.css'

// MaterialUI components
import AppBar from '@mui/material/AppBar';
import { Tabs } from '@mui/material';
import Tab from '@mui/material/Tab';
import Toolbar from '@mui/material/Toolbar';
// import { makeStyles } from '@mui/styles';
import { withStyles } from "@material-ui/core/styles";

//import logo
import eventHubLogo from '../images/eventHubLogo2.png';

const CustomTab = withStyles({
    selected: {
      color: '#1f262d !important',
    },
})(Tab);

function Appbar(props) {
    // const classes = useStyles();

    return (
    <AppBar className='appbar'>
        <Toolbar>
            <img src={eventHubLogo} className="logo" onClick={()=>props.setHeaderChoice(false)}/>
            <Tabs 
                className='tabs-container'
                value={props.headerChoice}
                onChange={(e,value)=>props.setHeaderChoice(value)}
                TabIndicatorProps={{ sx: { backgroundColor: "#32c1d5 ", height: "4px"} }}>
                <CustomTab value="1" className='tab' label={<p className='tab-text'>Theater</p>}/>
                <CustomTab value="2" className='tab' label={<p className='tab-text'>Music</p>}/>
                <CustomTab value="3" className='tab' label={<p className='tab-text'>Cinema</p>}/>
                <CustomTab value="4" className='tab' label={<p className='tab-text'>Streaming</p>}/>
                <CustomTab value="5" className='tab' label={<p className='tab-text'>Sports</p>}/>


            </Tabs>
        </Toolbar>
    </AppBar>
  )
}

export default Appbar