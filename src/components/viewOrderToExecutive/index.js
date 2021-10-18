import React,{Component, useEffect, useState} from 'react';

const ViewOrdersToExecutive = () => {
    const [orders, setOrders] = useState([]);
    const [medicines, setMedcines] = useState([]);
    
    useEffect(() => {
        const order = localStorage.getItem('productOrders') === null?[]:JSON.parse(localStorage.getItem('productOrders'));
        setOrders(order);
        const medicine = localStorage.getItem('medicines') === null?[]:JSON.parse(localStorage.getItem('medicines'));
        setMedcines(medicine);
    }, [])

    return ( <div className="section">
        <h1 className="heading">Orders</h1>
        <div className="rows-container">
            {orders?.map((item) => <OrderRow item ={item} medicines={medicines} />)}
        </div>
    </div> );
}
 
export default ViewOrdersToExecutive;

class OrderRow extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            totalAmount:0
         }
    }
    render() { 
        return ( <div className="order-row">
        <div>
            <p><span>OrderId:</span> {this.props.item.id}</p>
            <p><span>Customer Name:</span> {this.props.item.customer}</p>
            <p><span>Contact Number:</span> {this.props.item.phone}</p>
        </div>
        <hr />
        <div>
            <div className="view-row view-product-row">
                    <p>Products Number</p>
                    <p>Products Name</p>
                    <p>Quantity</p>
                    <p>Amount</p>
            </div>
            {this.props.item.product?.map((product)=> <ProductRow product={product} medicines={this.props.medicines}/>)}
        </div>
        <p className="amount">Total Amount: {this.props.item.product.reduce((acc,item)=>{
            const findMedicine = this.props.medicines.find((med)=> med.medicine == item.name);
            const amount = (findMedicine.price - (findMedicine.price * findMedicine.discount)/100) * item.qty;
            return acc + amount;
        },0)}</p>
    </div> );
    }
}

const ProductRow = ({product,medicines}) => {

    const findMedicine = medicines.find((item)=> item.medicine == product.name); 
    const amount = (findMedicine.price - (findMedicine.price * findMedicine.discount)/100) * product.qty;
    
    return ( <div className="view-row view-product-row">
        <p>{product.productNumber}</p>
        <p>{product.name}</p>
        <p>{product.qty}</p>
        <p>{amount}</p>
    </div> );
}