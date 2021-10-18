import React,{Component} from 'react';

class AddMedicines extends Component {
    medicine = localStorage.getItem('medicines') === null?[]:JSON.parse(localStorage.getItem('medicines'))
    constructor(props) {
        super(props);
        this.state = {
            medicineName: "",
            manufacturerName: "",
            price: 0,
            stock: 0,
            discount: 0,
            medicines: []
        }
    }

    submitOrder = (e) =>{
        e.preventDefault();
        const medicine = localStorage.getItem('medicines') === null?[]:JSON.parse(localStorage.getItem('medicines'));
        const medicineDetail = {
            id: medicine.length + 1,
            medicine: this.state.medicineName,
            manufacturer: this.state.manufacturerName,
            price: this.state.price,
            stock: this.state.stock,
            discount: this.state.discount
        }
        const indexOfItem = medicine.findIndex((item)=>item.medcine === this.state.medicineName);
        if(indexOfItem < 0){
            medicine.push(medicineDetail)
        }
        else{
            alert("Medcine Already Exist")
        }
        localStorage.setItem('medicines',JSON.stringify(medicine));
        this.setState({
            medicineName: "",
            manufacturerName: "",
            price: 0,
            stock: 0,
            discount: 0,
        });
    }

    shouldComponentUpdate(nextState,nextProps){
        if(nextState.medicineName !== this.state.medicineName || nextState.manufacturerName !== this.state.manufacturerName || nextState.price !== this.state.price || nextState.stock !== this.state.stock || nextState.discount !== this.state.discount){
            return true;
        }
        else return false;
    }

    render() { 
        return ( <div className="main-container">
        <h1 className="heading">Add Medicine</h1>
        <form id="order-form" onSubmit={(e) => this.submitOrder(e)}>
            <div className="input-container">
                <label>Medicine Name:
                    <input type="text" name="medicine" required onChange={(e)=>this.setState({medicineName: e.target.value})} value={this.state.medicineName} />
                </label>
                <label>Manufacturer Name:
                    <input type="text" name="manufacturer" required onChange={(e)=>this.setState({manufacturerName: e.target.value})} value={this.state.manufacturerName} />
                </label>
            </div>
            <div className="input-container">
                <label>Price:
                    <input type="number" name="price" required onChange={(e)=>this.setState({price: e.target.value})} value={this.state.price} />
                </label>
                <label>Stock:
                    <input type="number" name="stock" onChange={(e)=>this.setState({stock: e.target.value})} value={this.state.stock} />
                </label>
            </div>
                <label>Discount:
                    <input type="number" name="discount" maxLength="2" required onChange={(e)=>this.setState({discount: e.target.value})} value={this.state.discount} />
                </label>
            <div className="submit-btn-wrapper">
                <button className="submit-orders" style={{width:"150px"}}>Add Medicine</button>
            </div>
        </form>
        </div> );
    }
}
 
export default AddMedicines;