// async function loadNames() {
//     const response = await fetch('./Data.json');
//     const names = await response.json();
//     console.log(names); 
//     // logs [{ name: 'Joker'}, { name: 'Batman' }]
//   }
//   loadNames();

let Data = [
    {
        "name": "Iphone",
        "price": 1200,
        "desc": "this is good phone"
    },
    {
        "name": "Macbook Air",
        "price": 2200,
        "desc": "this is good laptop"
    },
    {
        "name": "Apple watch",
        "price": 500,
        "desc": "this is good watch"
    },
    {
        "name": "Rebok shoo",
        "price": 1000,
        "desc": "this is good shoo"
    },
    {
        "name": "Jeans",
        "price": 900,
        "desc": "this is good pant"
    }
]


// console.log("my data is ",Data);
// 1. join
// const arr = Data.join(" * ");

// console.log("this is arr",arr);

// 2. pop
// console.log(Data.pop());

// 3. push

// console.log(Data);
// Data.push({
//     "name": "new element",
//     "price": 900,
//     "desc": "this is good asdf"
// })
// console.log("after push", Data);

// 4. shift -> pop starting object
// Data.shift();

// 5. unshift -> adds a new element to an array (at the beginning)

// Data.unshift({
//     "name": "new element",
//     "price": 900,
//     "desc": "this is good asdf"
// })

// 6. access using indexing
// console.log(Data[0]);

// 7. length property
// console.log(Data.length);

// 8. Delete method -> Using delete leaves undefined holes in the array. Use pop() or shift() instead.
// delete Data[0];
// console.log(Data);

// 9. merging 2 arrays
const arr2 = [{
    "name": "last",
    "price": 900,
    "desc": "this is good pant"
}]

const newData =Data.concat(arr2);
console.log(newData);

// 10. Splice ->  method can be used to add new items to an array:
// Data.splice(2, 0, {
//     "name": "by splice",
//     "price": 900,
//     "desc": "this is good pant"
// });

// #####
// The first parameter (2) defines the position where new elements should be added (spliced in).
// The second parameter (0) defines how many elements should be removed.
// The rest of the parameters (object) define the new elements to be added.
// The splice() method returns an array with the deleted items:

// ##### -> using Splice to remove element/object
// Data.splice(2,1);
// console.log(Data.splice(2,1));

// 11. slice -> method slices out a piece of an array into a new array.
// const arr = Data.slice(1);
// console.log(arr);
// const arr = Data.slice(1,3);
// console.log(arr);

// ####
// The slice() method creates a new array.
// The slice() method does not remove any elements from the source array.

// 12. sort / reverse
// console.log(Data.reverse());

// 13. Numeric sort 
// ####
// By default, the sort() function sorts values as strings.
// This works well for strings ("Apple" comes before "Banana").
// However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".

// const points = [40, 100, 1, 5, 25, 10];
// asending
// points.sort(function(a, b){return a - b});
// decending
// points.sort(function(a, b){return b - a});

// points.sort((a,b) => {return a-b});
// console.log(points);

// 13. Highest / Lowest Array Value
// const points = [40, 100, 1, 5, 25, 10];
// points.sort(function(a, b){return a - b});
// now points[0] contains the lowest value
// and points[points.length-1] contains the highest value
// console.log(points[points.length-1]);

// 14. Min / Max
// const points = [40, 100, 1, 5, 25, 10];
// console.log(Math.max.apply(null, points));

// 15. for each
// const numbers = [45, 4, 9, 16, 25];
// numbers.forEach(myFunction);
// function myFunction(value) {
//     console.log(value);
// }

// 16. map 
// const numbers = [45, 4, 9, 16, 25];
// const resArr = numbers.map(myFun);
// function myFun(value){
//     return value*2;
// };
// console.log(resArr);

// map on arry of object
// const resDataArr = Data.map(myMapFun);
// function myMapFun(obj){
//     return obj.price*2;
// }
// console.log(resDataArr);

// 17. filter
// const numbers = [45, 4, 9, 16, 25];
// const resArr = numbers.filter(myFun);
// function myFun(val){
//     return val > 18;
// }
// console.log(resArr);

// // filter on array of object
// const resDataArr = Data.filter(myFunction);
// function myFunction(obj){
//     return obj.price > 1000;
// }
// console.log(resDataArr);

// 18. reduce 
// const numbers = [45, 4, 9, 16, 25];
// let sum = numbers.reduce(myFunction);
// function myFunction(total, value) {
//   return total + value;
// }
// console.log(sum);
// const totalSum = 0;

// let ans = Data.reduce((total, obj) => {
//     console.log(typeof (obj.price));
//     let x = parseInt(obj.price);
//     return total + x;
// },0);

// console.log(ans);

// 19. every, some, 












console.log(Data);