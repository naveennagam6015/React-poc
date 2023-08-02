function user(num1) {
    console.log(num1);
}
user(10);
// export default user;






import { useState } from "react"

function user(num1) {
    return num1 + 5
}
var output = user(10)
console.log(output)


var myName;

function Addition() {
    const [num1, setNum1] = useState();
    const [num2, setNum2] = useState();
    const [tot, setTot] = useState();
    //     myName="navven"
    //    console.log(myName)
    function handleClick() {
        setTot(Number(num1) + Number(num2));
    }



    return (
        <div>
            <div className="t-cntr">Data {output}</div>

            <form className="t-cntr">
                <input type="number" name="num1" onChange={(event) => {
                    setNum1(event.target.value)
                }}>
                </input>
                <span>+</span>
                <input type="number" name="num2" onChange={(event) => {
                    setNum2(event.target.value)
                }}>

                </input>
                <span>=</span>
                <input type="text" value={tot}></input>
                <button onClick={handleClick} type="submit">submit</button>
            </form>

            {/* <button  onClick={Addition}>Click</button> */}
            <h1 value={tot}></h1>
        </div>

    )
}

// export default Addition 






import { useState } from "react";
import './Function.css'


function App() {

    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [tot, setTot] = useState(num1 + num2);
    const [error, setError] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();
        if (num1.length == 0 || num2.length == 0) {
            setError(false)
        }
        console.log(num1, num2)
    }

    function handleClick() {
        setTot(num1 + num2);
    }

    return (
        <div className="t-cntr">
            <h2>Adding Numbers</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="number" value={num1} onChange={e => setNum1(e.target.value)}></input>
                </div><br />
                {error ?
                    <label className="required">Please fill any number</label> : ""}<br />
                <span>+</span><br />
                <div>
                    <input type="number" value={num2} onChange={e => setNum2(e.target.value)}></input>
                </div><br />
                {error ?
                    <label className="required">Please fill any number</label> : ""}<br />
                <span>=</span><br />
                <button onClick={handleClick} >submit</button>
            </form>
            <h2> Ans : {tot}</h2>
        </div>



    );
}

export default App 
