import { BrowserRouter, Routes,Link,Route  } from "react-router-dom";
import Login from './LoginPage/login';
import Fn from './Functions/Function-return';
import "./App.css"
import FunctionReturn from "./Functions/Function-return";
import Warning from "./Advanced/Warning";
import Valedation from "./Advanced/Valedation";
export default function App() {
    return (
     <div>
        
        <h1 className="t-cntr">Router Link</h1>

        <BrowserRouter>
        <nav className="t-cntr">
            <button className="margin"><Link to="/LoginPage/login">Login Page</Link></button>
            <button className="margin"><Link to="/Functions/Function-return">Functions Page</Link></button>
            <button className="margin"><Link to="/Advanced/Warning">Warning</Link></button>
            <button className="margin"><Link to="/Advanced/Valedation">Valedation</Link></button>
        </nav>
        <section>
            <Routes>
                <Route path="/LoginPage/login" element={<Login/>}/>
                <Route path="/Functions/Function-return" element={<Fn/>}/>
                <Route path="/Advanced/Warning" element={<Warning/>}/>
                <Route path="/Advanced/Valedation" element={<Valedation/>}/>
            </Routes>
        </section>
        </BrowserRouter>
        {/* <Function-return/> */}
     </div>  
    )
}