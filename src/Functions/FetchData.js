import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
function FetchData() {
    const [data, setData] = useState([]);
 


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos').then(
            ref => ref.json()
        ).then(json => setData(json))
    }, [])

    return (
        <div className='bg-secondary'>
            {data.map(item=> 

            <h3 className='text-white' key={item.id}>{item.title}</h3>

            )}
        </div>
    )
}

export default FetchData