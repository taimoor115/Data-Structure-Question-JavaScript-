function merge(arr, temp, low, mid, high) {
  for (let i = low; i <= high; i++) {
    temp[i] = arr[i];
  }

  let i = low;
  let j = mid + 1;
  let k = low;

  while (i <= mid && j <= high) {
    if (temp[i] < temp[j]) {
      arr[k] = temp[i];
      i++;
    } else {
      arr[k] = temp[j];
      j++;
    }
    k++;
  }

  while (i <= mid) {
    arr[k] = temp[i];
    i++;
    k++;
  }
}

function sort(arr, temp, low, high) {
  if (low < high) {
    let mid = Math.floor(low + (high - low) / 2);
    sort(arr, temp, low, mid);
    sort(arr, temp, mid + 1, high);
    merge(arr, temp, low, mid, high);
  }
}

const arr = [5, 4, 3, 2, 1];
const temp = new Array(arr.length);
sort(arr, temp, 0, arr.length - 1);
console.log(arr);
