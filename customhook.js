import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';

const usePrevious = value => { // have to use "use" to create custom hook
    const prev = useRef();      //useRef build in hook element,useRef.current collects previous value;
    console.log("pc",prev.current);
    useEffect(()=>{
        console.log("v",value);
       prev.current = value; //.current collects current value & it goes to no 11 line
    },[value])  // Only re-run if value changes
    return prev.current;  // Return previous value (happens before update in useEffect above)
} 
const Header = () => {
    const [count,setCount] = useState(0);
    console.log("c",count);
    const previous = usePrevious(count);
    return (
        <div className="header">
         <h1>Count:{count} Previous:{previous} </h1>
         <button onClick={()=>setCount(count+1)}>+</button>
         <button onClick={()=>setCount(count-1)}>-</button>
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Order Review</a>
                <a href="/inventory">Manage Inventory</a>
            </nav>
        </div>
    );
};

export default Header;