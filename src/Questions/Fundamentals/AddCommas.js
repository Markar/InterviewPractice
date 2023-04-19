import React, { useState } from 'react';
// Add commas in-between each character of a string. 
// Do this in such a way so that I could execute: 'hello'.addCommas()
  
export function AddCommas(props) {    
    const [data, setData] = useState("hello");
    const [formattedData, setFormattedData] = useState(props.data || []);
    
    String.prototype.addCommas = function () {
      let res = '';
      let str = this.valueOf();
      // console.log('str', str, typeof str);
      for (let i = 0; i < str.length; i++) {        
        res += str[i] + ',';
      }

      return res;
    }
   
    

    return (
        <div>
            <h3>Add Commas:</h3>
            <div>
              {"hello".addCommas()}
            </div>
        </div>    
    );
}