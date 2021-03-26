import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import CloudIcon from '@material-ui/icons/Cloud';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  sidebarLinks: {
    color: '#919191',
    '&:hover': {
      textDecoration: 'none',
      color: '#494949',
    }
  }
});

export default function SideDrawer({ state, setState }) {
  const classes = useStyles();

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState(open);
  };

  const list = () => (
    <>
      <div
        role="presentation"
        className={clsx(classes.list)}
      >
        <List className="mt-5">
          {React.Children.toArray(SIDEBAR_LINKS.map(({title, handle, icon}) => (
              <a className={classes.sidebarLinks} href={handle}>
            <ListItem button key={title}>
            <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={title} />
            </ListItem>
              </a>
          )))}
        </List>
      </div>
    </>
  );

  return (
    <div>
      <Drawer transitionDuration={{ enter: 200, exit: 0 }} open={state} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </div>
  );
}


const SIDEBAR_LINKS = [
  { title: "Weather App", handle: "/widgets#weather", icon: <CloudIcon />},
  { title: "Mars Rover", handle: "/widgets#marsImages", icon: <img style={{ width: "24px" }} src="https://img.icons8.com/wired/64/000000/space-ship.png"/>}
]