import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
    return (
        <div>
            
            <div className="but">

            <h1>Sports Club</h1>
            <Link to="/post"><button className='button'>Post</button></Link>
            <Link to="/get"><button className='button'>Get</button></Link>
            <Link to="/put"><button className='button'>Put</button></Link>
            <Link to="/delete"><button className='button'>Delete</button></Link>
    
            </div>
            
        </div>
    )
};


export default Home;