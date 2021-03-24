import { useLocation, NavLink } from 'react-router-dom';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import InfoIcon from '@material-ui/icons/Info';
import WorkIcon from '@material-ui/icons/Work';
import ContactMailIcon from '@material-ui/icons/ContactMail';

const useStyles = makeStyles({
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "space-evenly",
    paddingTop: "10px",
    paddingBottom: "10px",
    background: '#2E4053 ',
    height: "70px",
    position: 'fixed',
    zIndex: 9,
  },
  navigationBtn: {
    outline: 'none',
    fontSize: '18px',
    '&:hover': {
      background: 'unset',
      color: 'red',
   },
  },
  materialIcon: {
    '&:hover': {
      color: 'red',
   },
  },
});

const Header = () => {

    let location = useLocation();
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return (
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={`${location.pathname === '/' ? "d-none" : "dropdown"} ${classes.root}`}
      >
       <NavLink className="text-decoration-none" exact={true} activeClassName='active-link' to="/about"><BottomNavigationAction className={classes.navigationBtn} label="About" icon={<InfoIcon className={classes.materialIcon} fontSize="large" />} /></NavLink> 
       <NavLink className="text-decoration-none" activeClassName='active-link' to="/work"><BottomNavigationAction className={classes.navigationBtn} label="Work" icon={<WorkIcon className={classes.materialIcon} fontSize="large" />} /></NavLink> 
       <NavLink className="text-decoration-none" activeClassName='active-link' to="/contact"><BottomNavigationAction className={classes.navigationBtn} label="Contact" icon={<ContactMailIcon className={classes.materialIcon} fontSize="large" />} /></NavLink> 
      </BottomNavigation>
    );
};

export default Header;
