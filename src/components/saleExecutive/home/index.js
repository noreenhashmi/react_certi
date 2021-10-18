import React from 'react';
import { useLocation } from 'react-router-dom';
import CreateOrders from '../createOrders';
import SalesTopbar from '../topbar';
import ViewOrders from '../viewOrders';

const SaleExecutive = () => {
    const {search} = useLocation();
    const match = search.match(/page=(.*)/);
    const type = match?.[1];
    return ( <div>
        <SalesTopbar />
        {search === "" && <CreateOrders />}
        {type === "vieworders" && <ViewOrders />}
    </div> );
}
 
export default SaleExecutive;