// 예제 1
function a(arr, index) {
    return arr[index];
}

const arr = ['a', 'b', 'c', 'd', 'e'];
let index = 3;

console.log('a : ' + a(arr, index));

// 예제 2
function b(num) {
    return num++;
}

console.log('b : ' + b(99));

// 예제 3
function c(array, item) {
    for (let i=0; i<array.length; i++) {
        if (item === array[i]) {
            return i;
        }
    }
    return -1;
}

const arry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const item = 1;

console.log('c-arry : ' + arry[5], 'c-item : ' + item);

// 예제 4
function d(array, index1, index2) {
    let aux = array[index1];
    array[index1] = array[index2];
    array[index2] = aux;
}

function bubbleSort(array) {
    let length = array.length;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - 1; j++) {
            if (array[j] > array[j + 1]) {
                d(array, j, j + 1);
            }
        }
    }
}
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
bubbleSort(array);