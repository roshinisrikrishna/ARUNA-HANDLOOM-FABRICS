import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Dropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Row,
  Col,
  Container,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import NavbarShort from "./NavbarShort";
import SignUp from "views/index-sections/SignUp";
import { Avatar } from '@material-ui/core';
import { HashLink } from 'react-router-hash-link';
import logo from "../../assets/img/arunahflogo.png";


function IndexNavbar() {
  const [collapseOpen, setCollapseOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [click, setClick] = useState(false); // Add a click state

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  const [modal, setModal] = useState(false);
  const [userProfilePicture, setUserProfilePicture] = useState('');


  // const handleUserLoggedIn = (email) => {
  //   setIsLoggedIn(true);
  //   setUserEmail(email);
  // };
  const handleUserLoggedIn = (email) => {
    setIsLoggedIn(true);
    setUserEmail(email);
    const profilePicture = getProfilePictureFromCookie();
    setUserProfilePicture(profilePicture);
  };
  

  const getProfilePictureFromCookie = () => {
    const cookies = document.cookie.split('; ');
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i];
      let eqPos = cookie.indexOf('=');
      let name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      if (name === 'profilePicture') {
        return cookie.substr(eqPos + 1);
      }
    }
    return '';
  };

  const getEmailFromCookie = () => {
    const cookies = document.cookie.split('; ');
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i];
      let eqPos = cookie.indexOf('=');
      let name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      if (name === 'email') {
        return cookie.substr(eqPos + 1);
      }
    }
    return '';
  };
  const clearEmailCookie = () => {
    document.cookie = "email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  };
  const clearProfilePictureCookie = () => {
    document.cookie = "profilePicture=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
   };
   
   const handleUserLoggedOut = () => {
    clearEmailCookie();
    clearProfilePictureCookie();
    setIsLoggedIn(false);
    setUserEmail('');
    setUserProfilePicture('');
   };
   
    

  const menuRef = useRef();

  useEffect(() => {
    const email = getEmailFromCookie();
    const profilePicture = getProfilePictureFromCookie();

    if (email) {
      setIsLoggedIn(true);
      setUserEmail(email);
      setUserProfilePicture(profilePicture);


    } else {
      setIsLoggedIn(false);
      setUserEmail('');
      setUserProfilePicture('');
    }
 
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      if (window.innerWidth >= 1000) {
        setClick(true);
      } else {
        setClick(false);
      }      
    };
  
    handleResize(); // Initial call to set the click state
  
    window.addEventListener("resize", handleResize);
  
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount
 

  return (
    <div ref={menuRef}>
      {screenWidth >= 1200 || click ? ( // Check screenWidth or click state
     <Navbar className="fixed-top" expand="lg" style={{background:"#424242", fontFamily: "Raleway, sans-serif" }}>
        <Container fluid>
          <Collapse
            className="navbar-collapse justify-content-center"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
            <NavbarBrand
    onClick={() => setModal(true)}
    className="pt-4 pb-4"
    id="navbar-brand"
    style={{ fontSize: "20px", fontWeight: "bold", color: "#d4d4d4", textTransform: "capitalize", letterSpacing:"0.2em" }}
  >
    <img
                      src={logo}
                      alt="Eightfold.ai Logo"
                      className="navbar-logo"
                      style={{ width: "60px", height: "auto", marginRight: "5px" }} // Adjust the width as needed
                    />
     Aruna Handloom Fabrics
  </NavbarBrand>
             
            </Nav>
          </Collapse>

          <Collapse className="justify-content-center" isOpen={collapseOpen} navbar>
            <Nav navbar>
           
            <NavItem>
                <NavLink to="/" tag={Link} className="nav-link mr-3" style={{  }}>
                  <p style={{ paddingTop:"8%", fontWeight: 400, color: "#d4d4d4",  }}>Home</p>
                  {/* <p>{userEmail}</p> */}
                  {/* <p>{userProfilePicture}</p> */}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/about-me" tag={Link} className="nav-link mr-3" style={{  }}>
                <HashLink to="/#about-us" smooth={true} style={{textDecoration:"none",fontWeight: 400, color: "#d4d4d4",}}>
                About Us
                    </HashLink>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink to="/portfolio" tag={Link} className="nav-link mr-3" style={{  }}>
                  <p style={{ paddingTop:"8%",fontWeight: 400, color: "#d4d4d4",  }}>Portfolio</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="" tag={Link} className="nav-link mr-3" style={{  }}>
                <HashLink to="/#contact" smooth={true} style={{textDecoration:"none",fontWeight: 400, color: "#d4d4d4",}}>
                      Contact Us
                    </HashLink>
                </NavLink>
              </NavItem>



            </Nav>
          </Collapse>
        </Container>
<style>
  {`

.custom-dropdown-menu.active{
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
  transition: 1000ms ease;
}

.custom-dropdown-menu.inactive{
  opacity: 0;
  visibility: hidden;
  transform: translateY(-20px);
  transition: 1000ms ease;
}

  .custom-dropdown-menu a {
  text-decoration: none; 
  border-bottom: 2px solid transparent; 
  transition: border-bottom 0.3s ease-in-out;
  color: #899DA3; 


}
.nav-link a:hover,.nav-link p:hover{
  font-size: 16px;
  color: white;
  font-weight: bold !important;
}

  .nav-item p{
    color: #d4d4d4;
    font-size: 15px;
  }
  .nav-link a{
    color: #d4d4d4;
    font-size: 15px;
  }
  .nav-item p:hover{
    color: #899DA3;
  }
  .nav-item:hover{
    color: #899DA3;
    background: transparent;
  }
  .nav-item p{
    color: #899DA3;
  }
  ` 
  }
</style>
</Navbar>
) : <NavbarShort />} 

</div>
);
}

export default IndexNavbar;
