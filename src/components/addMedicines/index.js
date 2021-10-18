import React,{Component} from 'react';
import "../components.css";

class AddMedicines extends Component {
    medicine = localStorage.getItem('medicines') === null?[]:JSON.parse(localStorage.getItem('medicines'))
    constructor(props) {
        super(props);
        this.state = {
            medicineName: "",
            manufacturerName: "",
            price: "",
            stock: "",
            discount: "",
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
            price: parseInt(this.state.price),
            stock: parseInt(this.state.stock),
            discount: parseInt(this.state.discount)
        }
        const indexOfItem = medicine.findIndex((item)=>item.medicine === this.state.medicineName && item.manufacturer === this.state.manufacturerName);
        if(indexOfItem < 0){
            medicine.push(medicineDetail);
            alert("Medicine Added Successfully!!")
        }
        else{
            alert("Medcine Already Exist")
        }
        localStorage.setItem('medicines',JSON.stringify(medicine));
        this.setState({
            medicineName: "",
            manufacturerName: "",
            price: "",
            stock: "",
            discount: "",
        });
    }

    shouldComponentUpdate(nextState,nextProps){
        if(nextState.medicineName !== this.state.medicineName || nextState.manufacturerName !== this.state.manufacturerName || nextState.price !== this.state.price || nextState.stock !== this.state.stock || nextState.discount !== this.state.discount){
            return true;
        }
        else return false;
    }

    render() { 
        return ( <div className="section">
        <h1 className="heading">Add New Medicine</h1>
        <form className="forms" onSubmit={(e) => this.submitOrder(e)}>
            <div className="input-container">
                <label>Medicine Name:
                    <input type="text" placeholder="Enter Medicine Name" name="medicine" required onChange={(e)=>this.setState({medicineName: e.target.value})} value={this.state.medicineName} />
                </label>
                <label>Manufacturer Name:
                    <input type="text" placeholder="Enter Manufacturer" name="manufacturer" required onChange={(e)=>this.setState({manufacturerName: e.target.value})} value={this.state.manufacturerName} />
                </label>
            </div>
            <div className="input-container">
                <label>Price:
                    <input type="number" placeholder="Enter Price for Medicine" name="price" required onChange={(e)=>this.setState({price: e.target.value})} value={this.state.price} />
                </label>
                <label>Discount(in %):
                    <input type="number"  placeholder="Any Discount for Medicine" name="discount" maxLength="2" required onChange={(e)=>this.setState({discount: e.target.value})} value={this.state.discount} />
                </label>               
            </div>
            <label>Stock:
                    <input type="number" placeholder="Medicine Availability" name="stock" onChange={(e)=>this.setState({stock: e.target.value})} value={this.state.stock} />
                </label>
            <div className="add-btn-wrapper">
                <button className="add-btn" style={{width:"150px"}}>Add Medicine</button>
            </div>
        </form>
        </div> );
    }
}
 
export default AddMedicines;