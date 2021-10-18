import React, { Component } from 'react';
import './header.css';
class Header extends Component {
    render() {
      return (
      <>

      <header>
      <div id="logo"> <a href="index.html"><span>SHOP</span>LANE</a></div>
        <div id="links">
            <a href="index.html">HOME</a>
            <a href="#CLOTHINGS">CLOTHINGS</a>
            <a href="#ACCESSORIES">ACCESSORIES</a>
        </div>
        <div id="icons">
            <i class="fa fa-search"></i>
            <div id="card">
                <a href="cart.html"> <i class="fa fa-shopping-cart"> <span id="cart-count"></span> </i> </a>
            </div>
            <i class="fa fa-user-circle-o"></i>
        </div>
      </header>
      </>

      );
    }
  }
  
  export default Header;