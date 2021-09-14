//! exeresie 1

// let alfaBeth = ["a", "b", "c", "d"];
// alfaBeth.forEach((ele, i, am) => {
//   console.log(ele, i, am);
// });

//! exeresie 2
// let numbers = [2, 7, 4, 7, 2];
// numbers.forEach((element, index) => {
//   console.log(element, index);
// });
//! exeresie 3
// numbers.forEach((num) => {
//   if (num % 2 == 0) {
//     console.log("yes");
//   } else {
//     console.log("no");
//   }
// });

//? for/of - access to the element:

//! exeresie 1
// const obj = [
//   { a: "1", b: "1" },
//   { a2: "2", b2: "2" },
//   { a3: "3", b3: "3" },
// ];

// const obj1 = { a: "1", b: "1" };

// for (const key in obj1) {
//   console.log(` the value: ${key}`);
//   console.log(` the key: ${obj1[key]}`);
// }

//! home work

//! exeresie 1
// const articles = [];

//! exeresie 2

const arrayObj = [
  { a: "obj1", b: "num1" },
  { a1: "obj2", b1: "num2" },
];

for (let i = 0; i < arrayObj.length; i++) {
  for (const key in arrayObj[i]) {
    console.log(`the key is "${key}" and  the object is "${arrayObj[i][key]}"`);
  }
}

//! exeresie 3
//! exeresie 4
// const num_to_result = [4, 2, 4, 10];
//!  4.a
// let result = 0;
// for (let i = 0; i < num_to_result.length; i++) {
// }
// console.log(result);

// num_to_result.forEach((element ,index) => {
//   result += num_to_result[index];
// });
// console.log(result);
//! 4.b
// for (const i of num_to_result) {
//   result+=i
// }
// console.log(result);
