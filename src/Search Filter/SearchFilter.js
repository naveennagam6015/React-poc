import React, { useState } from 'react'
import Data from './city.json'

function SearchFilter() {
    const [search,setSearch]=useState('');
  return (
    <center>
        <h4 className='m-3'>Search here :</h4><br />
        <input className='form-control' style={{width:"20%"}}  type="text" value={search} onChange={(e)=>setSearch(e.target.value)}/>
        {
            Data.filter(city=>city.name.toLowerCase().includes(search.toLowerCase())).map( city => {
                return(
                    <div key={city.id} className='p-2 m-4' style={{"border":"1px solid black",borderRadius:"5px",width:"50%"}}>
                        {city.name}
                    </div>
                )
            })
        }
    </center>
  )
}

export default SearchFilter