// function selectImage() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       console.log("Step 1: Image selected");
//       resolve();
//     }, 4000);
//   });
// }

const { Input } = require("postcss");

// function applyFilter() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       console.log("Step 2: Filter applied");
//       resolve();
//     }, 2000);
//   });
// }

// function addCaption() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       console.log("Step 3: Caption added");
//       resolve();
//     }, 5000);
//   });
// }

// function uploadImage() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       console.log("Step 4: Image uploaded");
//       resolve();
//     }, 3000);
//   });
// }

// selectImage()
//   .then(() => applyFilter())
//   .then(() => addCaption())
//   .then(() => uploadImage())
//   .then(() => console.log("All steps completed"));

var containsDuplicate = function (nums){
  let map ={};
  for(let num of nums){
    if(map[num]){
      return true;
    }
    map[num] = 1;
  }
  return false;
};

let input =  [1,1,1,3];


var unique = function(nums){
  let map = {};
  for(let num of nums){
    map[num] = (map[num]|| 0) + 1;

  }
  
  for (let num of nums){
    if(map[num]===1){
      return num;
    }
    
  }
  return -1;
};
console.log(unique(input));


