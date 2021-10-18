import React,{useEffect, useState} from 'react';

const ViewMedicines = () => {
    const [medicines, setMedicines] = useState([]);

    const deleteItem = (id) =>{
        const items = localStorage.getItem('medicines') === null?[]:JSON.parse(localStorage.getItem('medicines'));
        const itemsAfterDelete = items.filter((item)=>item.id !== id);
        localStorage.setItem("medicines",JSON.stringify(itemsAfterDelete));
        setMedicines(itemsAfterDelete);
    }

    const updateItem = (obj,id) =>{
        const items = localStorage.getItem('medicines') === null?[]:JSON.parse(localStorage.getItem('medicines'));
        items.map((item)=>{
            if(item.id === id){
                item.medicine = obj.medicine;
                item.manufacturer = obj.manufacturer;
                item.stock = obj.stock;
                item.price = obj.price;
                item.discount = obj.discount;
            }
        })
        localStorage.setItem("medicines",JSON.stringify(items));
        setMedicines(items);
    }

    useEffect(() => {
        const medicine = localStorage.getItem('medicines') === null?[]:JSON.parse(localStorage.getItem('medicines'));
        setMedicines(medicine);
    }, [])

    return ( <div className="section">
        <h1 className="heading">Medicines Available</h1>
        <div className="rows-container">
            <div className="view-row">
                <p>Id</p>
                <p>Medicine</p>
                <p>Manufacturer</p>
                <p>Price</p>
                <p>Stock</p>
                <p>Discount</p>
                <p></p>
            </div>
            {medicines?.map((item) => <Row item ={item} deleteItem={deleteItem} updateItem ={updateItem} />)}
        </div>
    </div> );
}
 
export default ViewMedicines;

const Row = ({item, deleteItem,updateItem}) => {

    const [editID, setEditID] = useState(0);
    const [medicine, setMedicine] = useState(item.medicine);
    const [manufacturer, setManufacturer] = useState(item.manufacturer);
    const [price, setPrice] = useState(item.price);
    const [stock, setStock] = useState(item.stock);
    const [discount, setDiscount] = useState(item.discount);

    const obj = {
        medicine: medicine,
        manufacturer: manufacturer,
        price: price,
        stock: stock,
        discount: discount 
    }

    return ( <div className="view-row">
        <p>{item.id}</p>
        <p>{editID === item.id? <input className="editInput" value={medicine} onChange={(e)=>setMedicine(e.target.value)} /> :item.medicine}</p>
        <p>{editID === item.id? <input className="editInput" value={manufacturer} onChange={(e)=>setManufacturer(e.target.value)} /> :item.manufacturer}</p>
        <p>{editID === item.id? <input className="editInput" value={price} onChange={(e)=>setPrice(e.target.value)} /> :`Rs.${item.price}`}</p>
        <p>{editID === item.id? <input className="editInput" value={stock} onChange={(e)=>setStock(e.target.value)} /> :item.stock}</p>
        <p>{editID === item.id? <input className="editInput" value={discount} onChange={(e)=>setDiscount(e.target.value)} /> :`${item.discount}%`}</p>
        <p>{editID === item.id? <button className="update-btn" onClick={() => {setEditID(0);updateItem(obj,item.id);}}>Update Item</button> :
            <div><i class="far fa-edit" onClick={()=>setEditID(item.id)}></i>
            <i class="far fa-trash-alt" onClick={()=>deleteItem(item.id)}></i></div>}</p>
    </div> );
}