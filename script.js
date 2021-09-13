var arrayNums = [3, 2, 5, 12, 15];
var indexReceiver;
var indexSum;

//  ordena todos os items da array
//  [metodo Array.sort() utilizando for]

for(i = 0; i < arrayNums.length; i++){
    for(j = i; j < arrayNums.length; j++){
        if(arrayNums[i] > arrayNums[j]){
            indexReceiver = arrayNums[i];
            arrayNums[i] = arrayNums[j];
            arrayNums[j] = indexReceiver;
        }
    }
}

//  soma todos os items da array
//  [metodo reduce() utilizando for]

let firstNumber = arrayNums[0];

for(i = 1; i < arrayNums.length; i++){
    firstNumber = firstNumber + arrayNums[i];
}

console.log(arrayNums);
console.log(firstNumber);