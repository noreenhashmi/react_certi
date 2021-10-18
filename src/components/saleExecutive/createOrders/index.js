import React, { Component, useState } from 'react';
import "../salesExecutive.css";

class CreateOrders extends Component {
    orders = localStorage.getItem('productOrders') === null?[]:JSON.parse(localStorage.getItem('productOrders'));
    medicines = localStorage.getItem('medicines') === null?[]:JSON.parse(localStorage.getItem('medicines'));
    constructor(props) {
        super(props);
        this.state = {
            orderId: this.orders.length + 1,
            customerName: "",
            phone: null,
            productName: "",
            quantity: null,
            products: []
        }
    }

    submitOrder = (e) =>{
        e.preventDefault();
        const orders = localStorage.getItem('productOrders') === null?[]:JSON.parse(localStorage.getItem('productOrders'));
        const orderDetail = {
            id: orders.length + 1,
            customer: this.state.customerName,
            phone: this.state.phone,
            product: this.state.productName,
            quantity: this.state.quantity
        }
        orders.push(orderDetail)
        localStorage.setItem('productOrders',JSON.stringify(orders));
        this.setState({
            orderId: orders.length + 1,
            customerName: "",
            phone: null,
            productName: "",
            quantity: 0,
        });
    }

    shouldComponentUpdate(nextState,nextProps){
        if(nextState.customerName !== this.state.customerName || nextState.phone !== this.state.phone || nextState.productName !== this.state.productName || nextState.quantity !== this.state.quantity){
            return true;
        }
        else return false;
    }

    render() { 
        return ( <div className="main-container">
        <h1 className="heading">Create Orders</h1>
        <form id="order-form" onSubmit={(e) => this.submitOrder(e)}>
            <div className="input-container">
                <label>OrderId:
                    <input type="number" name="orderId"required  value={this.state.orderId} readOnly/>
                </label>
                <label>Customer Name:
                    <input type="text" name="customer" required onChange={(e)=>this.setState({customerName: e.target.value})} value={this.state.customerName} />
                </label>
                <label>Customer Phone Number:
                    <input type="tel" name="phone" maxLength="10" required onChange={(e)=>this.setState({phone: e.target.value})} value={this.state.phone} />
                </label>
            </div>
            <div className="input-container">
                <label>Product Name:
                    <input list="medicine" name="customer" required onChange={(e)=>this.setState({productName: e.target.value})} value={this.state.productName} />
                    <datalist id="medicine">
                        {
                            this.medicines?.map((item) => <option value={item.medicine} />)
                        }
                    </datalist>
                </label>
                <label>Quantity:
                    <input type="number" maxLength="2" onChange={(e)=>this.setState({quantity: e.target.value})} value={this.state.quantity} />
                </label>
            </div>
            <div className="submit-btn-wrapper">
                <button className="submit-orders">Submit</button>
            </div>
        </form>
        </div> );
    }
}
 
export default CreateOrders;
