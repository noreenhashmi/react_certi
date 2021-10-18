import React, { Component } from 'react';

class AddOrders extends Component {
    orders = localStorage.getItem('productOrders') === null?[]:JSON.parse(localStorage.getItem('productOrders'))
    constructor(props) {
        super(props);
        this.state = {
            orderId: this.orders.length + 1,
            customerName: "",
            phone: "",
            productName: "",
            quantity: "",
            products: []
        }
    }

    medicines = localStorage.getItem('medicines') === null?[]:JSON.parse(localStorage.getItem('medicines'));

    addProduct = (e) =>{
        e.preventDefault();
        const product = {
            productNumber: this.state.products.length + 1,
            name: this.state.productName,
            qty: parseInt(this.state.quantity)
        }
        const indexOfProduct = this.state.products.findIndex((item) => item.name == product.name)
        if(indexOfProduct < 0){
            this.state.products.push(product)
        }
        else{
            this.state.products[indexOfProduct].qty += product.qty;
        }
        console.log(this.state.products);
        this.setState({
            productName: "",
            quantity: ""
        })
    }

    submitOrder = (e) =>{
        e.preventDefault();
        const orders = localStorage.getItem('productOrders') === null?[]:JSON.parse(localStorage.getItem('productOrders'));
        const orderDetail = {
            id: orders.length + 1,
            customer: this.state.customerName,
            phone: this.state.phone,
            product: this.state.products
        }
        orders.push(orderDetail)
        localStorage.setItem('productOrders',JSON.stringify(orders));
        this.setState({
            orderId: orders.length + 1,
            customerName: "",
            phone: "",
            products:[]
        });
    }

    shouldComponentUpdate(nextState,nextProps){
        if(nextState.customerName !== this.state.customerName || nextState.phone !== this.state.phone || nextState.productName !== this.state.productName || nextState.quantity !== this.state.quantity){
            return true;
        }
        else return false;
    }

    render() { 
        return ( <div className="section">
        <h1 className="heading">Create New Order</h1>
        <div className="order-froms-wrapper">
            <form className="forms" style={{width:"30%"}} onSubmit={(e) => this.addProduct(e)}>
                <div>
                    <label style={{display:"block"}}>Product Name:<br />
                    {!this.medicines?<input className="orders" readOnly placeholder="Add Products to Pharmacy" />
                        :<div>
                            <input list="products" className="order" placeholder="Select Product" name="customer" required onChange={(e)=>this.setState({productName: e.target.value})} value={this.state.productName} />
                            <datalist id="products">
                                {this.medicines.map((item)=><option value={item.medicine} />)}
                            </datalist>
                        </div>
                    }</label>
                    <label style={{display:"block"}}>Quantity:<br />
                        <input  className="order"  placeholder="Enter Quantity for Product" type="number" onChange={(e)=>this.setState({quantity: e.target.value})} value={this.state.quantity} />
                    </label>
                </div>
                <div className="add-btn-wrapper">
                    <button className="add-btn">Add Product</button>
                </div>
            </form>
            
            <form className="forms" style={{width:"65%"}} onSubmit={(e) => this.submitOrder(e)}>
            <div className="input-container">
                <label>OrderId:
                    <input type="number" name="orderId" required  value={this.state.orderId} readOnly/>
                </label>
            </div>
            <div className="input-container">
                <label>Customer Name:
                    <input type="text" placeholder="Enter Customer Name" name="customer" required onChange={(e)=>this.setState({customerName: e.target.value})} value={this.state.customerName} />
                </label>
                <label>Contact Number:
                    <input type="tel" placeholder="Enter Phone Number" name="phone" maxLength="10" required onChange={(e)=>this.setState({phone: e.target.value})} value={this.state.phone} />
                </label>
            </div>
            {this.state.products.length?<div>
                <div className="view-row view-product-row">
                    <p>Products Number</p>
                    <p>Products Name</p>
                    <p>Quantity</p>
                </div>
                {this.state.products.map((item)=><div className="view-row  view-product-row">
                    <p>{item.productNumber}</p>
                    <p>{item.name}</p>
                    <p>{item.qty}</p>
                </div>)}
            </div>:""}
            <div className="add-btn-wrapper">
                <button className="add-btn">Create Order</button>
            </div>
        </form>
        </div>
        </div> );
    }
}
 
export default AddOrders;
