import React from 'react';
import { Link } from 'react-router-dom';

const SalesTopbar = () => {
    return ( <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid" >
        <a className="navbar-brand" href="#">Pharmacy Store</a>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup" style={{flexGrow:"0"}}>
            <div className="navbar-nav">
            <Link className="nav-link" to="/salesexecutive">Create Order</Link>
            <Link className="nav-link" to="/salesexecutive?page=vieworders">View Orders</Link>
            <Link className="nav-link" to="/" >LogOut</Link>
            </div>
        </div>
    </div>
  </nav> );
}
 
export default SalesTopbar;