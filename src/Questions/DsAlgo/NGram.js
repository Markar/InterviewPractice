import React, { useState, useEffect } from 'react';

/*
  Write a function that takes a string of characters and an integer n and returns the most frequent n-gram. 
  Example: for ‘abcdabxe’ and 2 returns ‘ab’. 

  If there are more than one with the same frequency, return the first one you encountered.
  Modify this to return the most frequent one. 
*/

export default function NGram(props) {
  const data2 = "abcdabxe";
  const data = "abcdabxedada";
  const len = 2;

  const [result, setResult] = useState();

  useEffect(() => {
    getNGramMap(data, len);
  }, []);

  function getNGram(str, n) {    
    let obj = {};

    for (let i = 0; i < str.length; i++) {      
      let ng = str.substring(i, n + i);
      console.log('ng', ng, i, n + i);

      if (obj[ng]) {
        obj[ng] = {
          val: ng,
          count: obj[ng].count += 1
        };
      } else {
        obj[ng] = {
          val: ng,
          count: 1
        };
      }
    }    
    
    let highest;
    for (const [key, value] of Object.entries(obj)) {
      console.log('key: ', key, ' val: ', value);
      if (!highest || value.count > highest.count) {        
        highest = value;
        console.log('highest', highest);
      }
    };

    setResult(JSON.stringify(highest));
  }

  function getNGramMap(str, n) {    
    let map = new Map();

    for (let i = 0; i < str.length; i++) {      
      let ng = str.substring(i, n + i);      
      
      if (map.has(ng)) {         
        let count = map.get(ng);
        count++;        
        map.set(ng, count);        
      } else {
        map.set(ng, 1);        
      }
    }    
        
    let highest;    
    map.forEach( (value, key) => {         
      if (!highest || value > highest[0]) {
        highest = [value, key];
      }
    })
    
    setResult(highest[1]);
    return highest[1];
  }

  return (
    <div>
      <h3>N Gram of length {len} for {data}</h3>
      <div>
        Result: {result}
      </div>
    </div>
  );
}