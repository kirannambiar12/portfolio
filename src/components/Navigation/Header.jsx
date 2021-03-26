import { useLocation, NavLink } from 'react-router-dom';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import InfoIcon from '@material-ui/icons/Info';
import WorkIcon from '@material-ui/icons/Work';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import SideDrawer from "./Drawer"
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import styled from "styled-components";

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
    color: 'white',
    '&:hover': {
      color: 'red',
    },
  },
  openCloseBtn: {
    position: 'fixed',
    width: '30px',
    top: '140px',
    padding: '15px 0px 15px 0px',
    borderRadius: '0px 5px 5px 0px',
    display: 'flex',
    zIndex: '1399',
    '&:hover': {
      backgroundColor: '#2A2A2A',
    },
  }
});

const Header = () => {

  let location = useLocation();
  const classes = useStyles();
  const [state, setState] = React.useState(false);
  const [value, setValue] = React.useState(0);

  return (
    <div>
      <BottomNavigation
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={`${location.pathname === '/' ? "d-none" : "dropdown"} ${classes.root}`}
      >
        <NavLink className="text-decoration-none" exact={true} activeClassName='active-link' to="/about"><BottomNavigationAction className={classes.navigationBtn} label="About" icon={<InfoIcon className={classes.materialIcon} fontSize="large" />} /></NavLink>
        <NavLink className="text-decoration-none" activeClassName='active-link' to="/work"><BottomNavigationAction className={classes.navigationBtn} label="Work" icon={<WorkIcon className={classes.materialIcon} fontSize="large" />} /></NavLink>
        <NavLink className="text-decoration-none" activeClassName='active-link' to="/contact"><BottomNavigationAction className={classes.navigationBtn} label="Contact" icon={<ContactMailIcon className={classes.materialIcon} fontSize="large" />} /></NavLink>
      </BottomNavigation>
      <SideDrawer state={state} setState={setState} />
      <PeakBtnWrapper left={state ? "250px" : "0px"} drawerIsOpen={state} rotate={state ? "180deg" : "0"}>
        <div onClick={() => setState(!state)} className={`peak-btn cursor-pointer f-flex justify-content-center ${classes.openCloseBtn}`}><KeyboardArrowRightIcon className="arrow-logo" fontSize="large" color="action" /></div>
      </PeakBtnWrapper>
    </div>
  );
};

export default Header;


const PeakBtnWrapper = styled.section`
  .peak-btn {
    left: ${props => props.drawerIsOpen ? "250px" : props => props.left};
    border:  ${props => props.drawerIsOpen ? "none" : "1px solid #878787"};
    border-left: none;
    background-color: ${props => props.drawerIsOpen ? "white" : "black"};
    animation: ease-in 1s slideBtn;
    transition: left 0.2s ease-in;
  .arrow-logo {
    color: red;
    transform: rotate(${props => props.rotate});
    }
  }

`;