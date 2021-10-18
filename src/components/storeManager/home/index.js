import React from 'react';
import { useLocation } from 'react-router-dom';
import AddMedicines from "../addMedicine";
import AddOrder from '../addOrders';
import AddSalesExecutive from "../addSalesExecutive";
import StoreTopbar from '../topbar';
import ViewMedicines from "../viewMedicine";
import ViewOrders from '../viewOrders';
import ViewSalesExecutive from "../viewSalesExecutive";

const StoreManager = () => {
    
    const {search} = useLocation();
    const match = search.match(/page=(.*)/);
    const type = match?.[1];
    return ( <div>
        <StoreTopbar />
        {search === "" && <AddMedicines />}
        {type === "addsalesexecutive" && <AddSalesExecutive />}
        {type === "viewmedicine" && <ViewMedicines />}
        {type === "viewsalesexecutive" && <ViewSalesExecutive/>}
        {type === "addorders" && <AddOrder />}
        {type === "vieworders" && <ViewOrders/>}
    </div> );
}
 
export default StoreManager;