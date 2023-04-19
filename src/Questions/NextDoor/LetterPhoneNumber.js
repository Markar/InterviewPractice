import React, { useState, useEffect } from 'react';

const map = new Map(); 
map.set(2, "abc");
map.set(3, "def");
map.set(4, "ghi");
map.set(5, "jkl");
map.set(6, "mno");
map.set(7, "pqrs");
map.set(8, "tuv");
map.set(9, "wxyz");

export function LetterPhoneNumber(props) {
  const input = "23";
  // Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

  const [result, setResult] = useState([1]);

  function letterCombinations(digits) {
    let result = [];
    for (let i = 0; i < digits.length; i++) {
      let cur = digits[i];      
      let lookup = map.get(Number(cur));
      console.log('lookup', lookup);
      for (let j = 0; j < lookup.length; j++) {
        // iterate through the letters for each digit
      }
    }

    return result;
  }

  useEffect(() => {
    setResult(letterCombinations(input));
  }, []);

  return (
    <div>
      <h3>Letter combos for {input}</h3>
      <div>
        Result: {result.toString()}
      </div>
    </div>
  );
}