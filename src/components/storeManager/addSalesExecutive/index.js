import React,{Component} from 'react';

class AddSalesExecutive extends Component {
    salesExecutive = localStorage.getItem('salesExecutive') === null?[]:JSON.parse(localStorage.getItem('salesExecutive'))
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            dob: "",
            experience: 0,
            gender: "",
            salesExecutives: []
        }
    }

    submitOrder = (e) =>{
        e.preventDefault();
        const salesExecutive = localStorage.getItem('salesExecutive') === null?[]:JSON.parse(localStorage.getItem('salesExecutive'));
        const salesExecutiveDetail = {
            id: salesExecutive.length + 1,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            dob: this.state.dob,
            experience: this.state.experience,
            gender: this.state.gender,
        }
        const indexOfItem = salesExecutive.findIndex((item)=>item.firstName===this.state.firstName && item.lastName===this.state.lastName && item.dob===this.state.dob);

        if(indexOfItem < 0){
            salesExecutive.push(salesExecutiveDetail)
        }
        else{
            alert("Sales Executive Exist!!")
        }
        localStorage.setItem('salesExecutive',JSON.stringify(salesExecutive));
        this.setState({
            firstName: "",
            lastName: "",
            dob: "",
            experience: 0,
            gender: "",
        });
    }

    shouldComponentUpdate(nextState,nextProps){
        if(nextState.firstName !== this.state.firstName || nextState.lastName !== this.state.lastName || nextState.dob !== this.state.dob || nextState.experience !== this.state.experience || nextState.gender !== this.state.gender){
            return true;
        }
        else return false;
    }

    render() { 
        return ( <div className="main-container">
        <h1 className="heading">Add Sales Executive</h1>
        <form id="order-form" onSubmit={(e) => this.submitOrder(e)}>
            <div className="input-container">
                <label>First Name:
                    <input type="text" name="firstname" required onChange={(e)=>this.setState({firstName: e.target.value})} value={this.state.firstName} />
                </label>
                <label>Last Name:
                    <input type="text" name="lastname" required onChange={(e)=>this.setState({lastName: e.target.value})} value={this.state.lastName} />
                </label>
            </div>
            <div className="input-container">
                <label>Date of Birth:
                    <input type="date" name="dob" required onChange={(e)=>this.setState({dob: e.target.value})} value={this.state.dob} />
                </label>
                <label>Experience (in yrs):
                    <input type="number" name="experience" maxLength="2" onChange={(e)=>this.setState({experience: e.target.value})} value={this.state.experience} />
                </label>
            </div>
            <label>Gender:</label>
                <label>
                    <input type="radio" name="gender" onChange={(e)=>this.setState({gender: "male"})} /> Male
                </label>
                <label>
                    <input type="radio" name="gender" onChange={(e)=>this.setState({gender: "female"})} /> Female
                </label>
            <div className="submit-btn-wrapper">
                <button className="submit-orders" style={{width:"180px"}}>Add Sales Executive</button>
            </div>
        </form>
        </div> );
    }
}
 
export default AddSalesExecutive;