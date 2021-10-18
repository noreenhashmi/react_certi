import React, { useState } from 'react';
import './App.css';
import Login from './components/login';
import TopBar from './components/topbar';
import Footer from './components/footer';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SaleExecutive from './components/salesExecutive';
import StoreManager from './components/storeManager';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn")===null?false:localStorage.getItem("isLoggedIn"))

  const updateLoggedIn = () =>{
    setIsLoggedIn(localStorage.getItem("isLoggedIn"));
  }

  return (<>
  <BrowserRouter>
    <TopBar isLoggedIn={isLoggedIn} updateLoginStatus={updateLoggedIn}/>
    <Switch>
      <Route path="/" exact render={()=> <Login updateLoginStatus={updateLoggedIn} />} />
      <div className="main-container">
        <Route path="/salesexecutive" component={SaleExecutive} />
        <Route path="/storemanager" component={StoreManager} />
      </div>
    </Switch>
    <Footer />
  </BrowserRouter>
  </>);
}

export default App;
