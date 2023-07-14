import { BrowserRouter, Routes, Link, Route } from "react-router-dom";
import Login from './LoginPage/login';
import Fn from './Functions/Function-return';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import FunctionReturn from "./Functions/Function-return";
import Warning from "./Advanced/Warning";
import Valedation from "./Advanced/Valedation";
// import image from '../public/logo192.png';
export default function App() {
    return (
        <>
            <nav>
                <BrowserRouter>

                    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                        <div className="container">
                            <a className="navbar-brand text-white" href="#"><h3>ROUTER LINK</h3></a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">

                                <div className="me-auto">

                                </div>
                                <ul className="navbar-nav  mb-2 mb-lg-0">
                                    <li className="full-btn">
                                        <button type="button" className="m-2  btn btn-primary text-uppercase">
                                            <Link to="/LoginPage/login" className="text-white text-decoration-none">Login Page</Link></button>
                                    </li>
                                    <li className="full-btn">
                                        <button type="button" className="m-2 btn btn-primary text-uppercase">
                                            <Link to="/Functions/Function-return" className="text-white text-decoration-none">Functions Page</Link></button>
                                    </li>
                                    <li className="full-btn">
                                        <button type="button" className="m-2 btn btn-primary text-uppercase">
                                            <Link to="/Advanced/Warning" className="text-white text-decoration-none">Warning</Link>
                                        </button>
                                    </li>
                                    <li className="full-btn">
                                        <button type="button" className="m-2 btn btn-primary text-uppercase">
                                            <Link to="/Advanced/Valedation" className="text-white text-decoration-none">Valedation</Link></button>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </nav>

                    {/* <nav className="bg-p">
                        <div className="d-flex justify-content-between align-items-center">
                            <h3 className="px-5 text-uppercase">Router Link</h3>
                            <div className="d-flex">
                                <button type="button" className="m-2 btn btn-primary text-uppercase"><Link to="/LoginPage/login" className="text-white text-decoration-none">Login Page</Link></button>
                                <button type="button" className="m-2 btn btn-primary text-uppercase"><Link to="/Functions/Function-return" className="text-white text-decoration-none">Functions Page</Link></button>
                                <button type="button" className="m-2 btn btn-primary text-uppercase"><Link to="/Advanced/Warning" className="text-white text-decoration-none">Warning</Link></button>
                                <button type="button" className="m-2 btn btn-primary text-uppercase"><Link to="/Advanced/Valedation" className="text-white text-decoration-none">Valedation</Link></button>
                            </div>
                        </div>
                    </nav> */}
                    <section className="bg-se">
                        <Routes>
                            <Route path="/LoginPage/login" element={<Login />} />
                            <Route path="/Functions/Function-return" element={<Fn />} />
                            <Route path="/Advanced/Warning" element={<Warning />} />
                            <Route path="/Advanced/Valedation" element={<Valedation />} />
                        </Routes>
                    </section>
                </BrowserRouter>
            </nav>




        </>
    )
}