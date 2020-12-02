//sort an unsorted array

const unsortedArray = [5, 4, 1, 8, 7, 2, 6, 3];

//expected result [1,2,3,4,5,6,7,8]

const merge = (arr1, arr2) => {
  const result = [];
  let i = 0;
  let j = 0;

  //loop through both arrays at the same time

  while (i < arr1.length && j < arr2.length) {
    //compare elements
    if (arr1[i] > arr2[j]) {
      result.push(arr2[j]);
      j++;
    } else {
      result.push(arr1[i]);
      i++;
    }
  }
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }
  return result;
};

const sort = (unsortedArray) => {
  if (unsortedArray.length < 2) {
    return unsortedArray;
  } else {
    let index = "";
    if (unsortedArray.length % 2 === 0) {
      index = unsortedArray.length / 2;
    } else {
      index = parseInt(unsortedArray.length / 2);
    }
    const arr1 = unsortedArray.slice(0, index);
    const arr2 = unsortedArray.slice(index);

    return merge(sort(arr1),sort(arr2));
  }
};

sort(unsortedArray);
