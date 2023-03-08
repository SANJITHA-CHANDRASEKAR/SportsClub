import React,{ Component,} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
class Delete extends Component
{
    state ={
        Expense:[]
    }
    componentDidMount(){
        axios.get('http://127.0.0.1:8080/getall')
        .then(response => {
          this.setState({ Expense: response.data });
        })
        .catch(error => {
          console.log(error);
        });
    
    }
    async remove(id)
    {
        axios.delete ('http://localhost:8080/delete/' + id,
        {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })

            .then(response => response.json());
    }
    render()
    {
        const {Expense} = this.state;
    const rows=
    Expense.map(Expense =>
        <tr key={Expense.id}>
            <td >{Expense.id}</td>
            <td >{Expense.name}</td>
            <td >{Expense.dob}</td>
            <td >{Expense.contact}</td>
            <td >{Expense.sport}</td>
            <td><button  onClick={() => this.remove(Expense.id)} onChange={Expense}>Delete</button></td>
        </tr>)


    return(
        <div >
            <div className="home">
                <Link to="/"><button className='button'>Home</button></Link>
            </div>

            <div className='box'>
                <div >
                    <h3 className='head'>Data Table</h3>
                </div>

                <table>
                    <thead>
                        <tr>
                            <th >Id</th>
                            <th >Name</th>
                            <th >DOB</th>
                            <th >Contact</th>
                            <th >Sport</th>
                        </tr>
                    </thead>
                            <tbody>
                                {rows}
                            </tbody>
                </table>   
                </div> 
        </div>
    );
}
}
export default Delete;
