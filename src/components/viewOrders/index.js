import React, { Component, useEffect, useState } from 'react';

const ViewOrders = () => {
    const [orders, setOrders] = useState([]);
    const [medicines, setMedcines] = useState([]);

    const deleteItem = (id) => {
        const items = localStorage.getItem('productOrders') === null ? [] : JSON.parse(localStorage.getItem('productOrders'));
        const itemsAfterDelete = items.filter((item) => item.id !== id);
        localStorage.setItem("productOrders", JSON.stringify(itemsAfterDelete));
        setOrders(itemsAfterDelete);
    }

    const itemUpdated = (obj, id) => {
        const items = localStorage.getItem('productOrders') === null ? [] : JSON.parse(localStorage.getItem('productOrders'));
        items[id - 1].customer = obj.customer;
        items[id - 1].phone = obj.phone;
        items[id - 1].product = obj.product;
        items[id - 1].quantity = obj.quantity;
        localStorage.setItem("productOrders", JSON.stringify(items));
        setOrders(items)
        console.log(obj)
    }

    useEffect(() => {
        const order = localStorage.getItem('productOrders') === null ? [] : JSON.parse(localStorage.getItem('productOrders'));
        setOrders(order);
        const medicine = localStorage.getItem('medicines') === null ? [] : JSON.parse(localStorage.getItem('medicines'));
        setMedcines(medicine);
    }, [])

    return (<div className="section">
        <h1 className="heading">Orders</h1>
        <div className="rows-container">
            {orders?.map((item) => <OrderRow item={item} deleteItem={deleteItem} medicines={medicines} />)}
        </div>
    </div>);
}

export default ViewOrders;

class OrderRow extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (<div className="order-row"><i onClick={() => this.props.deleteItem(this.props.item.id)} class="far fa-trash-alt"></i>
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
                    <p></p>
                </div>
                {this.props.item.product?.map((product) => <ProductRow product={product} medicines={this.props.medicines} />)}
            </div>
            <p className="amount">Total Amount: {this.props.item.product.reduce((acc, item) => {
                const findMedicine = this.props.medicines.find((med) => med.medicine == item.name);
                const amount = (findMedicine.price - (findMedicine.price * findMedicine.discount) / 100) * item.qty;
                return acc + amount;
            }, 0)}</p>
        </div>);
    }
}

const ProductRow = ({ product, medicines }) => {

    const findMedicine = medicines.find((item) => item.medicine == product.name);
    const amount = (findMedicine.price - (findMedicine.price * findMedicine.discount) / 100) * product.qty;

    return (<div className="view-row view-product-row">
        <p>{product.productNumber}</p>
        <p>{product.name}</p>
        <p>{product.qty}</p>
        <p>{amount}</p>
        <p> <div><i class="far fa-edit"></i>
            <i class="far fa-trash-alt"></i></div></p>
    </div>);
}