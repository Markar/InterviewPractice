/* const arr = [1, [[[16]]],2, 3, [4, 5, [6, 7], 8],
  [10, 11, [12, 13]], 9
]; */
const arr = [
    [1, 2],
    [3, 4],
    [5, 6, [7, [8, 9]]],
    [10, 11, 12, 13, 14, 15]
  ];
  
  console.log('flat array: ', wrapper(arr, 3));
  
  function wrapper(arr, depth = 1) {
    let count = 0;
    let res = arr;
    while (count < depth) {
        console.log('res', res);
      res = flattenArr(res);
      count++;
    }
  
    return res;
  }
  
  function flattenArr(arr) {
    let result = [];
  
    for (let i = 0; i < arr.length; i++) {
      let item = arr[i];
      if (Array.isArray(item)) {
        for (let j = 0; j < item.length; j++) {
          let nested = item[j];
          result.push(nested);
        }
  
      } else {
        result.push(arr[i]);
      }
    }
  
    return result;
  }
  