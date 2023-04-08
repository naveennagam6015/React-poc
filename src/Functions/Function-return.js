
import { useState } from "react";
import './Function.css'
function App() {

    const [firstname, setFirstnae] = useState("");
    const [lastname, setLastname] = useState("");

    const [error, setError] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();
        if (firstname.length == 0 || lastname.length == 0) {
            setError(true)
        }
        if (firstname&&lastname){
            console.log("First Name",firstname,"/nLast Name",lastname)
        }
    }

    return (
        <div className="t-cntr">
            <h2>Warning</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <input placeholder="First name" type="text" onChange={e=>firstname(e.target.value)}></input>
                </div><br />
                {error&& firstname.length<=0?
                <label className="required">Please fill any number</label>:""}<br />
                {/* <span>+</span><br /> */}
                <div>
                    <input placeholder="Last name" type="text" onChange={e=>lastname(e.target.value)}></input>
                </div><br />
                {error&& lastname.length<=0?
                <label className="required">Please fill any number</label>:""}<br />
                {/* <span>=</span><br /> */}
                <button>submit</button>
            </form>
        </div>



    );
}

export default App 
