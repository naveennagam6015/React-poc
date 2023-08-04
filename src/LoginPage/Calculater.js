import React, { useState } from 'react'
import "./Calculater.css"
import 'bootstrap/dist/css/bootstrap.min.css';
function Calculater() {
    const [calculater, setCalculater] = useState("");
    const [result, setResult] = useState(0);
    const onChange = e => {
        setCalculater(e.target.value)
    }
    return (
        <center className='cntr'>
            <div className='calculater'>
                <h2>Calculater</h2>
                <input type="text" className="form-control w-50" value={calculater} onChange={onChange} /> <br />
                <button className='btn btn-primary' type='submit' onClick={() => setResult(

                    eval

                        (calculater))}>Result</button><br />
                <h3>Result is : {result}</h3>
                <button className='btn btn-primary m-1' onClick={() => setCalculater(calculater + "1")}>1</button>
                <button className='btn btn-primary m-1' onClick={() => setCalculater(calculater + "2")}>2</button>
                <button className='btn btn-primary m-1' onClick={() => setCalculater(calculater + "3")}>3</button>
                <button className='btn btn-primary m-1' onClick={() => setCalculater(calculater + "4")}>4</button>
                <button className='btn btn-primary m-1' onClick={() => setCalculater(calculater + "5")}>5</button> <br />
                <button className='btn btn-primary m-1' onClick={() => setCalculater(calculater + "6")}>6</button>
                <button className='btn btn-primary m-1' onClick={() => setCalculater(calculater + "7")}>7</button>
                <button className='btn btn-primary m-1' onClick={() => setCalculater(calculater + "8")}>8</button>
                <button className='btn btn-primary m-1' onClick={() => setCalculater(calculater + "9")}>9</button>
                <button className='btn btn-primary m-1' onClick={() => setCalculater(calculater + "0")}>0</button> <br />
                <button className='btn btn-primary m-1' onClick={() => setCalculater(calculater + "+")}>+</button>
                <button className='btn btn-primary m-1' onClick={() => setCalculater(calculater + "-")}>-</button>
                <button className='btn btn-primary m-1' onClick={() => setCalculater(calculater + "*")}>*</button>
                <button className='btn btn-primary m-1' onClick={() => setCalculater(calculater + "%")}>%</button>
                <button className='btn btn-primary m-1' onClick={() => setCalculater("")}>C</button>
            </div>
        </center>
    )
}
export default Calculater