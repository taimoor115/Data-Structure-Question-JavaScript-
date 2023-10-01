function insertionSort(arr) {
  let n = arr.length;

  for(let i = 1; i < arr.length; i++) {
    let temp = arr[i];
    let j = i - 1;

    while(j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = temp;
  }

  return arr;
}


arr = [4,6,2,1];
console.log(insertionSort(arr));
