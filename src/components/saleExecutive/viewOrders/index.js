import React,{useEffect, useState} from 'react';

const ViewOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const order = localStorage.getItem('productOrders') === null?[]:JSON.parse(localStorage.getItem('productOrders'));
        setOrders(order);
    }, [])
    return ( <div className="main-container">
        <h1 className="heading">Orders</h1>
        <div className="orders">
            <div className="order-row">
                <p>OrderId</p>
                <p>Customer</p>
                <p>Phone</p>
                <p>Product</p>
                <p>Quantity</p>
            </div>
            {orders?.map((item) => <OrderRow item ={item} />)}
        </div>
    </div> );
}
 
export default ViewOrders;

const OrderRow = ({item}) => {
    return ( <div className="order-row">
        <p>{item.id}</p>
        <p>{item.customer}</p>
        <p>{item.phone}</p>
        <p>{item.product}</p>
        <p>{item.quantity}</p>
    </div> );
}