import './App.css';
import Home from './Home';
import Post from './post';
import Get from './get';
import Put from './put';
import Delete from './delete';
import { Route,Routes } from 'react-router-dom';
function App() {
  return (
   <>
   <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route  path="/post" element={<Post/>}/>
        <Route  path="/get" element={<Get/>}/>
        <Route path="/put" element={<Put/>}/>
        <Route path="/delete" element={<Delete/>}/>

      </Routes>   
    
   </>
  );
}

export default App;
