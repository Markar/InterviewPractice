import React, { useState } from 'react';
// Return lowest n elements in order of two sorted arrays.
// [1,3,5,7]
// [2,4,6,8]
// [1,2,3,4,5,6,7,8]

// Merge two lists in ascending order to a new list with a max length of K.


export function SortedArrays(props) {
  const arr1 = [1, 3, 5, 7];
  const arr2 = [2, 4, 6, 8];

  function mergeSortedArray(a, b, count = a.length + b.length) {
    let sortedArray = [];
    let indexA = 0;
    let indexB = 0;

    while (indexA < a.length && indexB < b.length && sortedArray.length < count) {
      if (a[indexA] > b[indexB]) {
        sortedArray.push(b[indexB++]);
      } else {
        sortedArray.push(a[indexA++]);
      }
    }

    if (sortedArray.length < count) {
      if (indexB < b.length) {
        sortedArray.push(b[indexB]);
      } else {
        sortedArray.push(a[indexA]);
      }
    }

    return sortedArray;
  }  

  const l1 = [1, 3, 5, 7];
  //const l2 = [2, 4, 6, 8];
  const l2 = [];
  const k = 4;
  function mergeTop(list1, list2, k) {    
    // Return top 4 elements
    let result = [];
    let pointer1 = l1.length - 1;
    let pointer2 = l2.length - 1;

    for (let i = 0; i < k; i++) {
      if (list1[pointer1] >= list2[pointer2]) {
        result.push(list1[pointer1]);
        pointer1--;
      } else {
        result.push(list2[pointer2]);
        pointer2--;
      }
    }

    return result;
  }

  return (
    <div>
      <h3>Sorted:</h3>
      <div>
        {mergeSortedArray(arr1, arr2)}
      </div>
      <h3>Merge and return top 4 elements</h3>
      <div>
        {mergeTop(l1, l2, k)}
      </div>
    </div>
  );
}