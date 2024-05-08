import Signup from "./Components/Signup";
import {Login} from "./Components/Login";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

const App = () =>{
  return(
    <Router>
    
    <div>
    <Routes>
      <Route path='/' element= {<Login/>}/>
      <Route path='/Signup' element= {<Signup/>}/>
      </Routes>
      </div>

      </Router>
  );
}

export default App;