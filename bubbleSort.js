const reader = require('readline-sync');

const getArray = () => {
  console.log('Bubblesort in JS.');
  let arr = reader.question('Insert the array elements: \n');
  arr = arr.split(',').map(Number);
  return arr;
}

const bubbleSort = arr => {
    let n = arr.length;
    let swapper;
    let swap = true;
    while(swap){
        swap = false;
        for(let i = 0; i < n-1; i++){
            if(arr[i] > arr[i+1]){
                swap = true;
                swapper = arr[i +1];
                arr[i+1] = arr[i];
                arr[i] = swapper;
            }
        }
    }
    return arr;
}

const main = () => {
    let arr = getArray();
    const ordered = bubbleSort(arr);
    console.log(ordered);
}

main();
