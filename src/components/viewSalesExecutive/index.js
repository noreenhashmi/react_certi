import React,{useEffect, useState} from 'react';

const ViewSalesExecutive = () => {
    const [salesExecutives, setSalesExecutives] = useState([]);

    const deleteItem = (id) =>{
        const items = localStorage.getItem('salesExecutive') === null?[]:JSON.parse(localStorage.getItem('salesExecutive'));
        const itemsAfterDelete = items.filter((item)=>item.id !== id);
        localStorage.setItem("salesExecutive",JSON.stringify(itemsAfterDelete));
        setSalesExecutives(itemsAfterDelete);
    }

    const itemUpdated = (obj,id) =>{
        const items = localStorage.getItem('salesExecutive') === null?[]:JSON.parse(localStorage.getItem('salesExecutive'));
        items.map((item)=>{
            if(item.id === id){
                item.firstName = obj.firstName;
                item.lastName = obj.lastName;
                item.dob = obj.dob;
                item.experience = obj.experience;
            }
        })
        localStorage.setItem("salesExecutive",JSON.stringify(items));
        setSalesExecutives(items);
    }

    useEffect(() => {
        const salesExecutive = localStorage.getItem('salesExecutive') === null?[]:JSON.parse(localStorage.getItem('salesExecutive'));
        setSalesExecutives(salesExecutive);
    }, [])
    return ( <div className="section">
        <h1 className="heading">Our Sales Executives</h1>
        <div className="rows-container">
            <div className="view-row">
                <p>Id</p>
                <p>First Name</p>
                <p>Last Name</p>
                <p>DOB</p>
                <p>Experience (in yrs)</p>
                <p>Gender</p>
                <p></p>
            </div>
            {salesExecutives?.map((item) => <Row item ={item} deleteItem={deleteItem} itemUpdated={itemUpdated}  />)}
        </div>
    </div> );
}
 
export default ViewSalesExecutive;

const Row = ({item,deleteItem,itemUpdated}) => {

    const [editID, setEditID] = useState(0);
    const [firstName, setFirstName] = useState(item.firstName);
    const [lastName, setLastName] = useState(item.lastName);
    const [dob, setDob] = useState(item.dob);
    const [experience, setExperience] = useState(item.experience);

    const obj = {
        firstName: firstName,
        lastName: lastName,
        dob: dob,
        experience: experience,
    }


    return ( <div className="view-row">
        <p>{item.id}</p>
        <p>{editID === item.id ?<input className="editInput" type="text" onChange={(e)=>setFirstName(e.target.value)} value={firstName} />:item.firstName}</p>
        <p>{editID === item.id ?<input className="editInput" type="text" onChange={(e)=>setLastName(e.target.value)} value={lastName} />:item.lastName}</p>
        <p>{editID === item.id ?<input className="editInput" type="date" onChange={(e)=>setDob(e.target.value)} value={dob} />:item.dob}</p>
        <p>{editID === item.id ?<input className="editInput" type="text" onChange={(e)=>setExperience(e.target.value)} value={experience} />:item.experience}</p>
        <p>{item.gender}</p>
        <p>{editID === item.id ?<button className="update-btn" onClick={()=>{setEditID(0);itemUpdated(obj,item.id)}}>Update Item</button>:
            <div><i class="far fa-edit" onClick={()=> setEditID(item.id)}></i>
            <i class="far fa-trash-alt" onClick={() => deleteItem(item.id)}></i></div>}</p>
    </div> );
}