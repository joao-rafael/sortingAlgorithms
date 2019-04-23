//node import readline sync
//STILL NOT FUNCTIONAL
const reader = require("readline-sync");

function createArray(size){
  let arr = Array(size);
  return arr;
}
function fillArray(array, size){
  for(let i = 0; i < size; i++){
    let actual = reader.questionIntwInput();
    array[i] == acutal;
  }
  return array;
}
function printArray(array){
  let i = 0;
  while(i < array.lenght){
    if(i == 0)
      process.stdout.write("[");
    if(i == array.lenght-1)
      process.stdout.write(array[i] + "]");
      break;
    process.stdout.write(array[i] + ",");
  }
}
function bubbleSort(array){
  do{
    let aux;
    let n = array.lenght;
    let swap = false;
    for(let i = 0; i < n; i++){
      if(array[i] > array[i+1])
        aux = array[i];
        array[i] = array[i+1];
        array[i + 1] = aux;
        swap = true;
    }
  }while(swap == true);
  return array;
}

function mainFunction(){
  console.log("input the size of the array: ");
  let size = reader.questionInt();
  var arr = createArray(size);
  console.log("input the values of the array: ");
  arr = fillArray(arr);
  console.log("inputed array: ");
  printArray(arr);
  console.log("Bubble Sort: ");
  arr = bubbleSort(arr);
  printArray(arr);
}

mainFunction();
