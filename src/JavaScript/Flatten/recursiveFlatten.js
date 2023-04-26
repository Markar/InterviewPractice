

function flatten2(arr) {
	const res = [];
  
  function handleFlat(array) {
  	array.forEach(item => {
    	if (Array.isArray(item)) {
      	handleFlat(item);
      } else {
      	res.push(item);
      }
    });  
  }
  
  handleFlat(arr);  
  return res;
}

let input = [
    [1, 2],
    [3, 4],
    [5, 6, [7, [8, 9]]],
    [10, 11, 12, 13, 14, 15]
  ];
  
  console.log('flatten', flatten2(input));