import React from 'react';
import { useContext, useState } from 'react';
import { store } from './ContextApi';
export const Display = () => {
    const [data, setData] = useContext(store);
    const [name, setName] = useState('');
    const submitHandler = e => {
        e.preventDefault()
        setData([...data, { brandname: name }])
    }
    return (
        <div className='card'>
            <div className="card-body">
                {data.map(title => <h3 className='card-title'>{title.brandname}</h3>)}
                <form className="form" onSubmit={submitHandler}>
                    <input onChange={(e) => setName(e.target.value)} type="text" placeholder='Enter brand name' />
                    <input type="submit" value='Add' />
                </form>
            </div>
        </div>
    )
}
