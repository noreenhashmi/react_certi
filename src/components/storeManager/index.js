import React from 'react';
import { Link,useLocation } from 'react-router-dom';
import AddMedicines from '../addMedicines';
import AddOrders from '../addOrders';
import AddSalesExecutive from '../addSalesExecutive';
import ViewMedicines from '../viewMedcine';
import ViewOrders from '../viewOrders';
import ViewSalesExecutive from '../viewSalesExecutive';


const StoreManager = () => {
    const {search} = useLocation();
    const match = search.match(/page=(.*)/);
    const type = match?.[1];
    return (  <div className="app-sections">
        <StoreManagerTopBar />
        {search === "" && <AddMedicines />}
        {type === "addsalesexecutive" && <AddSalesExecutive />}
        {type === "viewmedicine" && <ViewMedicines />}
        {type === "viewsalesexecutive" && <ViewSalesExecutive />}
        {type === "addorders" && <AddOrders />}
        {type === "vieworders" && <ViewOrders />}
    </div> );
}
 
export default StoreManager;

const StoreManagerTopBar = () => {
    return ( <div className="sections-topbar">
        <Link className="links" to="/storemanager">Add Medicine</Link>
        <Link className="links" to="/storemanager?page=viewmedicine">View Medicine</Link>
        <Link className="links" to="/storemanager?page=addsalesexecutive">Add Sales Executive</Link>
        <Link className="links" to="/storemanager?page=viewsalesexecutive">View Sales Executive</Link>
        <Link className="links" to="/storemanager?page=addorders">Add Order</Link>
        <Link className="links" to="/storemanager?page=vieworders">View Orders</Link>
    </div> );
}