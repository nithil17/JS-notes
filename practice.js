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

// var containsDuplicate = function (nums){
//   let map ={};
//   for(let num of nums){
//     if(map[num]){
//       return true;
//     }
//     map[num] = 1;
//   }
//   return false;
// };

// let input =  [1,4,3,2, 7];
// let target = 9;


// var unique = function(nums){
//   let map = {};
//   for(let num of nums){
//     map[num] = (map[num]|| 0) + 1;

//   }
  
//   for (let num of nums){
//     if(map[num]===1){
//       return num;
//     }
    
//   }
//   return -1;
// };


// var double = function(nums, target){
//   let map = {};
//   for (let i = 0 ; i<nums.length; i++){
//     let need = target - nums[i];
//     if(map[need]!==undefined){
//       return (map[need], i)
//     }
//      map[nums[i]] = i;
//   }

  
// };

// console.log(double(input, target));


async function(){
  let data =  await Axio.get("api");
  let print = await JSON.data
  console.log(print);

}

for(let item of allClasses){
  item.style.cssText = `
                          color:red;
                          font-size:10px;
                          border:2px solid brown;
                          background-color: orange;
                        `
}
