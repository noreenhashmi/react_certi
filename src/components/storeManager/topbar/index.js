import React from 'react';
import { Link } from 'react-router-dom';

const StoreTopbar = () => {
    return ( <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid" >
      <a className="navbar-brand" href="#">Pharmacy Store</a>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup" style={{flexGrow:"0"}}>
        <div className="navbar-nav">
          <Link className="nav-link" to="/storemanager">Add Medicine</Link>
          <Link className="nav-link" to="/storemanager?page=viewmedicine">View Medicine</Link>
          <Link className="nav-link" to="/storemanager?page=addsalesexecutive">Add Sales Executive</Link>
          <Link className="nav-link" to="/storemanager?page=viewsalesexecutive">View Sales Executive</Link>
          <Link className="nav-link" to="/storemanager?page=addorders">Add Order</Link>
          <Link className="nav-link" to="/storemanager?page=vieworders">View Orders</Link>
          <Link className="nav-link" to="/">LogOut</Link>
        </div>
      </div>
    </div>
  </nav> );
}
 
export default StoreTopbar;