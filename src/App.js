import { BrowserRouter, Routes, Link, Route } from "react-router-dom";
import Login from './LoginPage/login';
import Fn from './Functions/Function-return';
import "./App.css"
import bootstrap from 'bootstrap/dist/css/bootstrap.css';
// import FunctionReturn from "./Functions/Function-return";
import Warning from "./Advanced/Warning";
import Valedation from "./Advanced/Valedation";
export default function App() {
    return (
        <>
            <nav>


                <BrowserRouter>
                    <nav className="bg-p">
                        <div className="d-flex justify-content-between align-items-center">
                            <h3 className="px-5 text-uppercase">Router Link</h3>
                            <div className="d-flex">
                                <button type="button" className="m-2 btn btn-primary text-uppercase"><Link to="/LoginPage/login" className="text-white text-decoration-none">Login Page</Link></button>
                                <button type="button" className="m-2 btn btn-primary text-uppercase"><Link to="/Functions/Function-return" className="text-white text-decoration-none">Functions Page</Link></button>
                                <button type="button" className="m-2 btn btn-primary text-uppercase"><Link to="/Advanced/Warning" className="text-white text-decoration-none">Warning</Link></button>
                                <button type="button" className="m-2 btn btn-primary text-uppercase"><Link to="/Advanced/Valedation" className="text-white text-decoration-none">Valedation</Link></button>
                            </div>
                        </div>
                    </nav>
                    <section className="bg-se">
                        <Routes>
                            <Route path="/LoginPage/login" element={<Login />} />
                            <Route path="/Functions/Function-return" element={<Fn />} />
                            <Route path="/Advanced/Warning" element={<Warning />} />
                            <Route path="/Advanced/Valedation" element={<Valedation />} />
                        </Routes>
                    </section>
                </BrowserRouter>
                {/* <Function-return/> */}
            </nav>

        </>
    )
}