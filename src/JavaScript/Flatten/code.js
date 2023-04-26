let arr = [
  [1, 2],
  [3, 4],
  [5, 6, [7, [8, 9]]],
  [10, 11, 12, 13, 14, 15]
];
const arr2 = [1, [[[16]]], 2, 3, [4, 5, [6, 7], 8],
  [10, 11, [12, 13]], 9
];

console.log(wrapper(arr, 3));

// Depth in wrapper only
function wrapper(arr, depth = 1) {
  console.log('wrapper');
  let count = 0;
  let res = arr;
  while (count < depth) {
    res = flatten(res);
    console.log('flatten', count, res);
    count++;
  }
}
function flatten(arr) {
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    if (Array.isArray(item)) {
      res.push(flatten(item));
    } else {
      res.push(item);
    }
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
// End

function flattenDepth(arr, depth = 1) {
  if (depth === 1) {
    return flattenArr(arr);
  }  

  let res = [];

  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    if (Array.isArray(item)) {
      res.push(flattenArr(item, depth - 1));
    } else {
      res.push(item);
    }
  }
  return res;
}

/*
function flattenArr(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {    	
      res = res.concat(flattenArr(arr[i]))
    } else {
      res.push(arr[i]);
    }
  }
  return res;
} */
