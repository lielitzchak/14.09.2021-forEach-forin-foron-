//! exeresie 1

let alfaBeth = ["a", "b", "c", "d"];
alfaBeth.forEach((ele, i, am) => {
  console.log(ele, i, am);
});

//! exeresie 2
let numbers = [2, 7, 4, 7, 2];
numbers.forEach((element, index) => {
  console.log(element, index);
});
//! exeresie 3
numbers.forEach((num) => {
  if (num % 2 == 0) {
    console.log("yes");
  } else {
    console.log("no");
  }
});

//? for/of - access to the element:

//! exeresie 1
const obj = [
  { a: "1", b: "1" },
  { a2: "2", b2: "2" },
  { a3: "3", b3: "3" },
];

const obj1 = { a: "1", b: "1" };

for (const key in obj1) {
  console.log(` the value: ${key}`);
  console.log(` the key: ${obj1[key]}`);
}
