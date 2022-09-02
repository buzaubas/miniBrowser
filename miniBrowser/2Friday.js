function getRandom(){
    const rndInt = Math.floor(Math.random() * 100) + 1;
    return rndInt;
}

// const arrayInt = [];

// for (let i = 0; i < 10; i++) {
//     arrayInt.push(getRandom());
// }


// function showArray(array){
//     console.log(array);
// }

// function onlyEven(array){
//     const result = [];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] % 2 == 0) {
//             result.push(array[i]);
//         }
//     }
//     showArray(result);
// }

// function sumAll(array){
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i];
//     }
//     console.log(sum);
// }

// function maxElement(array){
//     const buffer= [...array];
//     buffer.sort(function (a, b) {return a - b});
//     console.log(buffer.pop())
// }

// function putElement(array, index, item){
//     // const result = [];
//     // for (let i = 0; i < 11; i++) {
//     //     if (i == index) {
//     //         result.push(value);
//     //     }
//     //     else{
//     //         result.push();
//     //     }
//     // }

//     const result = [...array];
//     result.splice(index, 0, item);
//     console.log(result);
// }

// function deleteElement(array, index){
//     const result = [...array];
//     result.splice(index, 1);
//     console.log(result);
// }




// showArray(arrayInt);
// // onlyEven(arrayInt);
// // sumAll(arrayInt);
// maxElement(arrayInt);
// putElement(arrayInt, 4, "DFCZ");
// deleteElement(arrayInt, )

// 2 Задание

const arrayInt = [];
const array2 = [];

for (let i = 0; i < 10; i++) {
    arrayInt.push(getRandom());
}

for (let i = 0; i < 10; i++) {
    array2.push(getRandom());
}

function concatUniq(array1, array2){
    const result = array1.concat(array2);
    const unique = new Set(result);

    console.log(result);
    console.log(unique);
}

//короткая запись данной функций

function concatUniqShort(array1, array2){
    const result = [...new Set([...array1, ...array2])];

    console.log(result);
}

function concatDouble(array1, array2){
    const result = array1.filter(function (item) {
        return array2.indexOf(item) > -1
    }); //узнать больше
    console.log(result);
} //создает массив с общими элементами для двух массивов

function noconcatDouble(array1, array2){
    const result = array1.filter(function (item) {
        return array2.indexOf(item) === -1
    }); //узнать больше
    console.log(result);
}//создает массив со всеми элементами кроме общих

// concatUniq(arrayInt, array2);
// concatUniqShort(arrayInt, array2);
// noconcatDouble(arrayInt, array2);

const fruits = ['pineapple', 'apple', 'banana', 'peach', 'grapes'];

console.log(fruits);
// console.log(fruits.sort());
document.write('<ul>');
    for (let i = 0; i < fruits.length; i++) {
        document.write('<li>');
        document.write(fruits[i]);  
        document.write('</li>');
    }
document.write('</ul>');





function search(){
    let searchText = String.document.getElementById("search").value.toLowerCase();
    console.log(fruits.indexOf(searchText));
}

window.onload = init;
function init(){
    let button = document.getElementById("search");
    console.log(button);
}

