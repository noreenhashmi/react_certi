import React,{useEffect, useState} from 'react';

const ViewMedicines = () => {
    const [medicines, setMedicines] = useState([]);

    const deleteItem = (id) =>{
        const items = localStorage.getItem('medicines') === null?[]:JSON.parse(localStorage.getItem('medicines'));
        const itemsAfterDelete = items.filter((item)=>item.id !== id);
        localStorage.setItem("medicines",JSON.stringify(itemsAfterDelete));
        setMedicines(itemsAfterDelete);
    }

    const itemUpdated = (obj,id) =>{
        const items = localStorage.getItem('medicines') === null?[]:JSON.parse(localStorage.getItem('medicines'));
        items[id-1].medicine = obj.medicine;
        items[id-1].manufacturer = obj.manufacturer;
        items[id-1].stock = obj.stock;
        items[id-1].price = obj.price;
        items[id-1].discount = obj.discount;
        localStorage.setItem("medicines",JSON.stringify(items));
        setMedicines(items)
        console.log(obj)
    }

    useEffect(() => {
        const medicine = localStorage.getItem('medicines') === null?[]:JSON.parse(localStorage.getItem('medicines'));
        setMedicines(medicine);
    }, [])
    return ( <div className="main-container">
        <h1 className="heading">Medicines</h1>
        <div className="orders">
            <div className="order-row">
                <p>Id</p>
                <p>Medicine</p>
                <p>Manufacturer</p>
                <p>Price</p>
                <p>Stock</p>
                <p>Discount</p>
                <p></p>
            </div>
            {medicines?.map((item) => <OrderRow item ={item} deleteItem={deleteItem} itemUpdated={itemUpdated} />)}
        </div>
    </div> );
}
 
export default ViewMedicines;

const OrderRow = ({item, deleteItem,itemUpdated}) => {

    const [editID, setEditID] = useState(0);
    const [medicine, setMedicine] = useState("");
    const [manufacturer, setManufacturer] = useState("");
    const [price, setPrice] = useState(0);
    const [stock, setStock] = useState(0);
    const [discount, setDiscount] = useState(0);

    const obj = {
        medicine: medicine,
        manufacturer: manufacturer,
        price: price,
        stock: stock,
        discount: discount 
    }

    return ( <div className="order-row">
        <p>{item.id}</p>
        <p>{editID == item.id ?<input className="edit-input" type="text" onChange={(e)=>setMedicine(e.target.value)} value={medicine} />:item.medicine}</p>
        <p>{editID == item.id ?<input className="edit-input" type="text" onChange={(e)=>setManufacturer(e.target.value)} value={manufacturer}  />:item.manufacturer}</p>
        <p>{editID == item.id ?<input className="edit-input" type="number" onChange={(e)=>setPrice(e.target.value)} value={price}  />:`Rs.${item.price}`}</p>
        <p>{editID == item.id ?<input className="edit-input" type="number" onChange={(e)=>setStock(e.target.value)} value={stock}  />:item.stock}</p>
        <p>{editID == item.id ?<input className="edit-input" type="number" onChange={(e)=>setDiscount(e.target.value)} value={discount}  />:`${item.discount}%`}</p>
        <p>{editID == item.id ?<button className="submit-orders" onClick={()=>{setEditID(0);itemUpdated(obj,item.id)}}>Update Item</button>:
            <div><i class="far fa-edit" onClick={()=> setEditID(item.id)}></i>
            <i class="far fa-trash-alt" onClick={() => deleteItem(item.id)}></i></div>}</p>
    </div> );
}