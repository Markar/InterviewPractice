const arr = [
    [1, 2],
    [3, 4],
    [5, 6, [7, [8, 9]]],
    [10, 11, 12, 13, 14, 15]
  ];
  
  console.log('flat array: ', flat(arr, 3));
  
  
  function flat(arr, depth) {
  	let counter = 0;
    let res = arr;
    
  	while (counter < depth) {
    	res = flatten(res);    
      counter++;
    }
    
    return res;
  }
  
  function flatten(arr) {
  	let res = [];
    
    arr.forEach(item => {
    	if (Array.isArray(item)) {
      	res.push(...item);
      } else {
      	res.push(item);
      }    
    });
    
    return res;  
  }