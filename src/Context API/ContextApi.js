import React from 'react';
import { createContext,useState } from 'react';
import Count from './Count';
import { Display } from './Display';

export const store = createContext();
const ContextApi = () => {
    const [data,setData]=useState([
        {
            brandname:"Nokia"
        },
        {
            brandname :"Realme"
        },
        {
            brandname :"Samsung"
        }
    ]);
    return (
        <store.Provider value={[data,setData]}>
        <center>
            <Count />
            <Display />
        </center>
        </store.Provider>
    )
}

export default ContextApi