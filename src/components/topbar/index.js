import React from 'react';
import { Link } from 'react-router-dom';

const TopBar = (props) => {

  return ( <nav id="header" className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid" >
      <a className="navbar-brand" href="#"> <span>Pharmacy</span> Store</a>
      {props.isLoggedIn == "true" && <div className="collapse navbar-collapse" id="navbarNavAltMarkup" style={{flexGrow:"0"}}>
        <div className="navbar-nav">
          <Link className="nav-link" onClick={()=>{localStorage.setItem("isLoggedIn",false);props.updateLoginStatus()}} to="/">Log Out</Link>
        </div>
      </div>}
    </div>
  </nav> );
}
 
export default TopBar;