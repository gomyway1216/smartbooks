import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, List, ListItem, ListItemText, Drawer, IconButton, makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useRefContext } from '../Provider/RefProvider';
import useWindowDimensions from '../Hook/useWindowDimensions';
import SBLogo from '../img/SB_LOGO_4C_white1.png';

const useStyles = makeStyles({
  paper: {
    background: 'black'
  },
  root: {
  },
  appBar: {
    background: 'black'
  },
  list: {
    color: 'white'
  },
  fullList: {
    width: 'auto',
  },
  drawer: {
  }
});

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Hiragino Kaku Gothic Pro', 'ヒラギノ角ゴ Pro', 'Yu Gothic Medium', '游ゴシック Medium', 'YuGothic', '游ゴシック体', 'メイリオ', 'sans-serif'
    ].join(','),
  },
});

const ApplicationBar = () => {
  const classes = useStyles();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { width } = useWindowDimensions();
  const { refs, displayedItemList, setDisplayedItemList } = useRefContext();
  const [selectedItem, setSelectedItem] = useState('');

  useEffect(() => {
    if(displayedItemList.length > 0) {
      setSelectedItem(displayedItemList[0]);
    } else {
      setSelectedItem('');
    }
  }, [displayedItemList, setDisplayedItemList]);

  const toggleDrawer = (open) => (event) => {
    if(event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setIsDrawerOpen(open);
  };

  const handleItemClick = (itemName) => () => {
    scrollToDiv(itemName, 64);
  };

  const scrollToDiv = (refName, offset) => {
    if(refs.length === 0) {
      return;
    }
    const ref = refs.find(elm => elm.key === refName).ref;
    // offset for the appBar
    window.scrollTo(0, ref.current.offsetTop - offset);
  };

  const list = () => (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      className={classes.list}
    >
      <List>
        <ListItem button key="Home" onClick={()=> scrollToDiv('home', 56)}>
          <ListItemText primary="HOME" />
        </ListItem>
        <ListItem button key="CONTENTS" onClick={()=> scrollToDiv('contents', 56)}>
          <ListItemText primary="CONTENTS" />
        </ListItem>
        <ListItem button key="MISSION" onClick={()=> scrollToDiv('mission', 56)}>
          <ListItemText primary="MISSION" />
        </ListItem>
        <ListItem button key="TEAM" onClick={()=> scrollToDiv('team', 56)}>
          <ListItemText primary="TEAM" />
        </ListItem>
        <ListItem button key="INFORMATION" onClick={()=> scrollToDiv('information', 56)}>
          <ListItemText primary="INFORMATION" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <ThemeProvider theme={theme}>
      <div>
        <AppBar className={classes.appBar}>
          <Toolbar style={{ display: 'flex', justifyContent: 'space-between'}}>
            <div onClick={handleItemClick('home')} style={{display: 'flex'}}>
              <div style={{width: '150px'}}>
                <img src={SBLogo} style={{ display: 'block', width: '100%', height: 'auto' }}/>
              </div>
            </div>
            { width <= 768 && 
            <>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer(true)}
                edge="start"
              >
                <MenuIcon />
              </IconButton>
              <Drawer anchor={'left'} open={isDrawerOpen} onClose={toggleDrawer(false)} classes={{ paper: classes.paper }} className={classes.drawer}>
                {list()}
              </Drawer>
            </>
            } 
            { width > 768 &&
            <div style={{ width: '500px', display: 'flex', justifyContent: 'space-evenly'}}>
              <div onClick={handleItemClick('home')} style={{cursor: 'pointer', color: selectedItem === 'home' ? 'blue' : 'white'}} >
                HOME
              </div>
              <div onClick={handleItemClick('contents')} style={{cursor: 'pointer', color: selectedItem === 'contents' ? 'blue' : 'white'}}>
                CONTENTS
              </div>
              <div onClick={handleItemClick('mission')} style={{cursor: 'pointer', color: selectedItem === 'mission' ? 'blue' : 'white'}}>
                MISSION
              </div>
              <div onClick={handleItemClick('team')} style={{cursor: 'pointer', color: selectedItem === 'team' ? 'blue' : 'white'}}>
                TEAM
              </div>
              <div onClick={handleItemClick('information')} style={{cursor: 'pointer', color: selectedItem === 'information' ? 'blue' : 'white'}}>
                INFORMATION
              </div>
            </div>
            }
          </Toolbar>
        </AppBar>
      </div>
    </ThemeProvider>
  );
};

export default ApplicationBar;