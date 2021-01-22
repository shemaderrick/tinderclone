import React from "react";
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import "./header.css"
import { IconButton } from "@material-ui/core";
function Header(){

 return(
  
 <div className="Header">
   <IconButton>
    <PersonIcon fontSize="large" className="header__icon"/>
   </IconButton>
 <img className="header__image"
 src="https://logos-world.net/wp-content/uploads/2020/09/Tinder-Emblem.png" alt="" srcset=""/>
 <IconButton>
 <ForumIcon fontSize="large" className="header__icon"/>
 </IconButton>

 </div>);
}
export default Header;