function bubbleSort(arr) {
  let n = arr.length;
  let isSwapped;

  for (let i = 0; i < n - 1; i++) {
    isSwapped = false;

    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        isSwapped = true;
      }
    }

    if (isSwapped == false) {
      return;
    }
  }
  return arr;
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

const arr  = [5,4,3,2,1,0];
console.log(bubbleSort(arr));
