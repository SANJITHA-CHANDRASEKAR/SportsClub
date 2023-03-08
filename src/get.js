import axios from "axios";
import React,{Component} from "react";
import { Link } from "react-router-dom";
class Get extends Component{
    state={
        data:[]
    }
    componentDidMount()
    {
        axios.get('http://127.0.0.1:8080/getall').then(response=>{
            this.setState({data:response.data});
        })
        .catch(error=>{
            console.log(error);
        });
    }
    render()
      {
        return(
            <div>
                <div className="home">
                    <Link to="/"><button className='button'>Home</button></Link>
                </div>
            <div className="box">

                <h1>Club Members Detail</h1>
                

            <table border={1}>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>dob</th>
                        <th>contact</th>
                        <th>sport</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.data.map(user =>
                    (
                        <tr>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.dob}</td>
                            <td>{user.contact}</td>
                            <td>{user.sport}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
            </div>
        )
      }
}
export default Get;