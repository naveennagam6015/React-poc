import { BrowserRouter, Routes,Link,Route  } from "react-router-dom";
import Login from './LoginPage/login';
import Fn from './Functions/Function-return';
export default function App() {
    return (
     <div>
        
        <h1>Router Link</h1>

        <BrowserRouter>
        <nav>
            <Link to="/LoginPage/login">Login Page</Link>
            <Link to="/Functions/Function-return">Functions Page</Link>
        </nav>
        <section>
            <Routes>
                <Route path="/LoginPage/login" element={<Login/>}/>
                <Route path="/Functions/Function-return" element={<Fn/>}/>
            </Routes>
        </section>
        </BrowserRouter>
     </div>  
    )
}