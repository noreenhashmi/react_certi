import React,{useEffect, useState} from 'react';

const ViewOrders = () => {
    const [orders, setOrders] = useState([]);
    const [medicines, setMedcines] = useState([]);

    const deleteItem = (id) =>{
        const items = localStorage.getItem('productOrders') === null?[]:JSON.parse(localStorage.getItem('productOrders'));
        const itemsAfterDelete = items.filter((item)=>item.id !== id);
        localStorage.setItem("productOrders",JSON.stringify(itemsAfterDelete));
        setOrders(itemsAfterDelete);
    }
    const itemUpdated = (obj,id) =>{
        const items = localStorage.getItem('productOrders') === null?[]:JSON.parse(localStorage.getItem('productOrders'));
        items[id-1].customer = obj.customer;
        items[id-1].phone = obj.phone;
        items[id-1].product = obj.product;
        items[id-1].quantity = obj.quantity;
        localStorage.setItem("productOrders",JSON.stringify(items));
        setOrders(items)
        console.log(obj)
    }
    
    useEffect(() => {
        const order = localStorage.getItem('productOrders') === null?[]:JSON.parse(localStorage.getItem('productOrders'));
        setOrders(order);
        const medicine = localStorage.getItem('medicines') === null?[]:JSON.parse(localStorage.getItem('medicines'));
        setMedcines(medicine);
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
                <p>Ammount</p>
                <p></p>
            </div>
            {orders?.map((item) => <OrderRow item ={item} deleteItem={deleteItem} medicines={medicines} itemUpdated={itemUpdated} />)}
        </div>
    </div> );
}
 
export default ViewOrders;

const OrderRow = ({item,deleteItem,medicines,itemUpdated}) => {
    
    const [editID, setEditID] = useState(0);
    const [customer, setCustomer] = useState("");
    const [phone, setPhone] = useState(0);
    const [product, setProduct] = useState("");
    const [quantity, setQuantity] = useState(0);
    const medicine = localStorage.getItem('medicines') === null?[]:JSON.parse(localStorage.getItem('medicines'));
    const obj = {
        customer: customer,
        phone: phone,
        product: product,
        quantity: quantity,
    }

    const filterMedicine = medicines.find((med) => med.medicine === item.product)

    return ( <div className="order-row">
        <p>{item.id}</p>
        <p>{editID == item.id ?<input className="edit-input" type="text" onChange={(e)=>setCustomer(e.target.value)} value={customer} />:item.customer}</p>
        <p>{editID == item.id ?<input className="edit-input" type="tel" onChange={(e)=>setPhone(e.target.value)} value={phone} />:item.phone}</p>
        <p>{editID == item.id ?<div>
            <input className="edit-input" list="medicine" onChange={(e)=>setProduct(e.target.value)} value={product} />
                <datalist id="medicine">
                {
                    medicine?.map((item) => <option value={item.medicine} />)
                }
                </datalist>
    </div>:item.product}</p>
        <p>{editID == item.id ?<input className="edit-input" type="number" onChange={(e)=>setQuantity(e.target.value)} value={quantity} />:item.quantity}</p>
        <p>Rs. {(filterMedicine.price*item.quantity) - (filterMedicine.discount * filterMedicine.price)/100}</p>
        <p>{editID == item.id ?<button className="submit-orders" onClick={()=>{setEditID(0);itemUpdated(obj,item.id)}}>Update Item</button>:
            <div><i class="far fa-edit" onClick={()=> setEditID(item.id)}></i>
            <i class="far fa-trash-alt" onClick={() => deleteItem(item.id)}></i></div>}</p>
    </div> );
}