// Given an array of strings with only lowercase letters, 
// create a function that returns an array of those same strings,
// but each string has its letters rearranged such that it
// becomes a palindrome (if possible, if not, return -1).

const data = ["baa", "caca", "viicc"];
//civic, viicc, icvci

//caac
//acca
function findPalindromes() {
  let res = [];

  data.forEach(str => {
    res.push(getPalindrome(str));
  })

  return res;
}

/* 
  Count occurrences of all characters. 

  Count odd occurrences. 

  If this count is greater than 1 or is equal to 1 and length of the string is even, return -1

  Initialize two empty strings firstHalf and secondHalf. 

  Traverse the map, and save odd character if there is one

  For every character with count as count, attach count/2 characters to end of firstHalf and beginning of secondHalf. 

  Finally return the result by appending firstHalf, oddChar, and secondHalf
*/


function getPalindrome(str) {
  let map = new Map();  
  // Initialize two empty strings firstHalf and secondHalf. 
  let firstHalf = "";
  let secondHalf = "";
  // Count occurrences of all characters. 
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    
    if (map.has(char)) {
      let count = map.get(char);
      count++;
      map.set(char, count);      
    } else {
      map.set(char, 1);
    }
  }
  
  // Count odd occurrences.   
  let oddCount = 0;
  map.forEach( (val, key) => {  	
    if (val % 2 !== 0) {
    	oddCount++;
    }  	
  });
  // If this count is greater than 1 or is equal to 1 and length of the string is even then return -1
  if (oddCount >= 1 && str.length %2 == 0) {
  	return -1;
  }
  
  // For every character with count as count, attach count/2 characters to
  // the end of firstHalf and beginning of secondHalf.
  let oddChar = "";
  map.forEach( (val, key) => {
  	if (val % 2 == 0) {
    	let sub = "";
    	for (let i = 0; i < val/2; i++) {
      	sub += key;      
      }      
      
    	firstHalf = firstHalf + sub;
      secondHalf = sub + secondHalf;      
    } else {
    	oddChar = key;
    }
  
  });
  
  return firstHalf + oddChar + secondHalf;    
}

//let res = getPalindrome("viicc");
let res = findPalindromes(data);

//let res = findPalindromes(data);
console.log('res', res);



// Use string reversal
function isPalindrome(input) {
	let rev = [...input].reverse().join("");
  if (input == rev)
  	return true
  else
  	return false
}

// Check first half vs second half
function isPalindrome3(input) {	  
	if (input.length % 2 === 0) {
  	//even length string
    let firstHalf = input.substring(0, input.length / 2);
    let secondHalf = input.substring(input.length/2, input.length);
    let secondRev = [...secondHalf].reverse().join('');
    if (firstHalf === secondRev) {
    	return true;
    } else {
    	return false;
    }        
  } else {
  	let firstHalf = input.substring(0, input.length / 2);    
    let secondHalf = input.substring(input.length/2+1, input.length);    
    let secondRev = [...secondHalf].reverse().join('');
    
    if (firstHalf === secondRev) {
    	return true;
    } else {
    	return false;
    }          	
  }
}



function isPalindromeSimple(input) {

  let map = new Map();
  let count = 0;

  for (let i = 0; i < input.length; i++) {
    let cur = input[i];
    count = 0;

    if (map.has(cur)) {
      count = map.get(cur);
      count++;
      map.set(cur, count);      
    } else {
      map.set(cur, 1);
    }
  }

  let firstHalf = "";
  let secondHalf = "";
  let oddChar = "";    

  map.forEach((val, key) => {    
    if (val % 2 == 0) {
      let substring = "";
      for (let i = 0; i < val / 2; i++) {
        substring += key;
      }      
      firstHalf += substring;
      secondHalf = substring + secondHalf;      
    } else {
      oddChar = key;
    }
  });

	let ans = firstHalf + oddChar + secondHalf;
  
  return ans.length == input.length ? ans : -1;

}


