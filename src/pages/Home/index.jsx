import React from 'react';
import "./style.scss";
import { useState } from 'react';

const index = () => {

   const [count , setCount] = useState(0)

   const add = () => {
      setCount(count + 1)
   }

   const minus = () => {
      if (count > 0 ) {
         setCount(count - 1)
      }
   }



   return (
      <header> 
         <div className="wrapper">
            <h3>Счетчик:</h3>
            <h1>{count}</h1>
            <button onClick={minus} className="btn btn-danger">minus</button>
            <button onClick={add} className="btn btn-success">add</button>
         </div>
      </header>
   );
};

export default index;<h1>Home</h1>