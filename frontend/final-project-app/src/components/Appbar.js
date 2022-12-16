import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

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
    let navigate = useNavigate();

    const handleLogoClick = () => {
        props.setHeaderChoice(false)
        navigate("/");
    };

    return (
    <AppBar className='appbar'>
        <Toolbar>
            <img src={eventHubLogo} className="logo" onClick={handleLogoClick} component={Link} to={'/'}/>
            <Tabs 
                className='tabs-container'
                value={props.headerChoice}
                onChange={(e,value)=>props.setHeaderChoice(value)}
                TabIndicatorProps={{ sx: { backgroundColor: "#32c1d5 ", height: "4px"} }}>
                <CustomTab value="1" className='tab' label={<p className='tab-text'>Theater</p>} component={Link} to={'/theater'}/>
                <CustomTab value="2" className='tab' label={<p className='tab-text'>Music</p>} component={Link} to={'/theater'}/>
                <CustomTab value="3" className='tab' label={<p className='tab-text'>Cinema</p>} component={Link} to={'/theater'}/>
                <CustomTab value="4" className='tab' label={<p className='tab-text'>Streaming</p>} component={Link} to={'/theater'}/>
                <CustomTab value="5" className='tab' label={<p className='tab-text'>Sports</p>} component={Link} to={'/theater'}/>


            </Tabs>
        </Toolbar>
    </AppBar>
  )
}

export default Appbar