import axios from "axios";
import { Link } from "react-router-dom";
import React, { Component } from "react";
class Post extends Component {
    constructor(props){
        super(props);
        this.state={
            id:" ",
            name:" ",
            dob:" ",
            contact:" ",
            sport:" ",
        }
    }
handleIdChange = (event) => {
    this.setState({ id:event.target.value});
}

handleNameChange = (event) => {
    this.setState({ name:event.target.value});
}
handleDobChange = (event) => {
    this.setState({ dob:event.target.value});
}
handleContactChange = (event) => {
    this.setState({ contact:event.target.value});
}
handleSportChange = (event) => {
    this.setState({ sport:event.target.value});
}

handleSubmit = (event) =>{
    event.preventDefault();
    const data = {
        id : this.state.id,
        name : this.state.name,
        dob : this.state.dob,
        contact : this.state.contact,
        sport : this.state.sport        
    }
    axios.post('http://127.0.0.1:8080/addnew',data)
    this.setState ({
        id : "",
        name : "", 
        dob : "",
        contact : "",
        sport : ""        
    })
};
render(){
    return ( 
        <div>

        <div className="home">
            <Link to="/"><button className='button'>Home</button></Link>
        </div>

            <h1 className="head">New Member details</h1>
        <form onSubmit={this.handleSubmit} className="form">
            <label className="label">Id : </label>
            <input
                className="inp" 
                type="text" 
                value={this.state.id}
                onChange ={this.handleIdChange}
            />
            <br/>
            <br/>

            <label className="label">Name :  </label>
            <input
                className="inp" 
                type="text" 
                value={this.state.name}
                onChange ={this.handleNameChange}
            />
             <br/>
             <br/>

            <label className="label">DOB :  </label>
            <input
                className="inp" 
                type="text" 
                value={this.state.dob}
                onChange ={this.handleDobChange}
            />
             <br/>
             <br/>

            <label className="label">Contact : </label>
            <input
                className="inp" 
                type="text" 
                value={this.state.contact}
                onChange ={this.handleContactChange}
            />
             <br/>
             <br/>

            <label className="label">Sport : </label>
            <input
                className="inp" 
                type="text" 
                value={this.state.sport}
                onChange ={this.handleSportChange}
            />
             <br/>
             <br/>

            <button className="sub" type="submit"> Submit </button>
        </form>
        </div>
    );
  }
}

export default Post;