import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Link } from 'react-scroll';

const ApplicationBar = () => {

  return (
    <div>
      <AppBar style={{ background: 'transparent', boxShadow: 'none', backgroundRepeat: 'no-repeat', backgroundSize: 'auto', padding: '20px' }}>
        <Toolbar style={{ display: 'flex', justifyContent: 'space-between'}}>
          <div>
            <Link activeClass="active" to='home' spy={true} smooth={true} duration={500}>
              <Typography style={{ fontSize: '40px', cursor: 'pointer'}}> 
                SmartBooks Inc.
              </Typography>
            </Link>
          </div>
          <div style={{ width: '400px', display: 'flex', justifyContent: 'space-evenly', cursor: 'pointer'}}>
            <Link activeClass="active" to='home' spy={true} smooth={true} duration={500}>Home</Link>
            <Link activeClass="active" to='mission' spy={true} smooth={true} duration={500} >OUR MISSION</Link>
            <Link to='team' spy={true} smooth={true} duration={500} >TEAM</Link>
            <Link to='contact' spy={true} smooth={true} duration={500} >CONTACT</Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default ApplicationBar;