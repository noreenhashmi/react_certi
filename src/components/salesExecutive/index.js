import React from 'react';
import { Link,useLocation } from 'react-router-dom';
import AddOrders from '../addOrders';
import ViewOrdersToExecutive from '../viewOrderToExecutive';

const SaleExecutive = () => {
    const {search} = useLocation();
    const match = search.match(/page=(.*)/);
    const type = match?.[1];
    return ( <div className="app-sections">
        <SalesExecutiveTopBar />
        {search === "" && <AddOrders />}
        {type === "vieworders" && <ViewOrdersToExecutive />}
    </div> );
}
 
export default SaleExecutive;

const SalesExecutiveTopBar = () => {
    return ( <div className="sections-topbar">
        <Link className="links" to="/salesexecutive">Add Order</Link>
        <Link className="links" to="/salesexecutive?page=vieworders">View Orders</Link>
    </div> );
}