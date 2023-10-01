function selectionSort(arr) {
  let n = arr.length;

  for(let i = 0; i < n - 1; i++) {
    let min = i;

    for(let j = i + 1; i < n; j++) {
      if(arr[j] < arr[min]) {
        min = i;
      }
    }

    let temp = arr[min];
    arr[min] = arr[i];
    arr[i] = temp;
  }
  return arr;
}


arr = [5,4,3,2,1];
console.log(selectionSort(arr));
