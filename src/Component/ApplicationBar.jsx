import React from 'react';
import './applicationbar.scss';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Link } from 'react-scroll';

const ApplicationBar = () => {

  return (
    <div id = "header">
      <AppBar style={{ background: 'transparent', boxShadow: 'none', backgroundRepeat: 'no-repeat', backgroundSize: 'auto' }}>
        <Toolbar style={{ display: 'flex', justifyContent: 'space-between'}}>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <div id = "logo">
            <Typography variant="h6">
              SmartBooks Inc.
            </Typography>
          </div>
          <nav id = "nav">
            <div>
              <li><Link activeClass="active" to='home' spy={true} smooth={true} duration={500}>Home</Link></li>
              <li><Link activeClass="active" to='mission' spy={true} smooth={true} duration={500} >OUR MISSION</Link></li>
              <li><Link to='team' spy={true} smooth={true} duration={500} >TEAM</Link></li>
              <li><Link to='contact' spy={true} smooth={true} duration={500} >CONTACT</Link></li>
            </div>
          </nav>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default ApplicationBar;