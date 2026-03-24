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


// async function(){
//   let data =  await Axio.get("api");
//   let print = await JSON.data
//   console.log(print);

// }

// for(let item of allClasses){
//   item.style.cssText = `
//                           color:red;
//                           font-size:10px;
//                           border:2px solid brown;
//                           background-color: orange;

//                         `
// }


// let a = ["Image 1", "Image 2","Image 3","Image 4" ];
// document.getElementById('ichange').innerHTML = a;

// function isTruthly(value){
//   return !!value;
// };

// function getType(value){
//   if(value ===null) return "null";
//   if(Array.isArray(value)) return "Array";
//   return typeof value;
// }

// function outer(){
//   let count = 0;
//   return function inner(){
//     count++;
//     return count;
//   }

// }

// const fn = outer();
// console.log(fn());


  // setTimeout(()=>{
  //     for(let i =0 ; i<3 ; i++){
  //       console.log(i);
  //     }
  // },1000);


  

  // let max = arr[0];
  // let min = arr[0];

  // for(let i = 0; i<arr.length; i++ ){
  //   if(arr[i]<min){
  //     min = arr[i];
  //   }
  //   if(arr[i]>max){
  //     max=arr[i];
  //   }
  // }
  // console.log(min, max);


  // for (let i=0; i <arr.length; i++){
  //   sum += arr[i];
  // }
  // console.log(sum);
  // let temp = 0
  // for(let i=0; i < arr.length; i++){
  //   temp = arr[i];
  //   arr[i] = arr[arr.length-1] ;
  //   arr[arr.length-1] = temp;
  // }
  //   console.log(arr);

 

  // let start = 0;
  // let end = arr.length-1;
  // while(start<end){
  //   let temp = arr[start];
  //   arr[start] =arr[end];
  //   arr[end] = temp;

  //   start++;
  //   end--;
  // }
  // console.log(arr);

  // function findDuplicate(arr){
  //   const map = new Map();
  //   for(let num of arr){
  //     map.set(num,(map.get(num)||0)+1);
  //   }
  //   return [...map.entries()].filter(([key, val])=>val>1);
  // }

  // console.log(findDuplicate(arr));

  // function removeDuplicates(arr){
  //   return [...new Set(arr)];
  // }

  // console.log(removeDuplicates(arr));
 let arr =[10, 20, 10, 30, 20, 40];
// let result = [...Set(arr)]
 

// console.log(result);


// function secondLargest(arr) {
//   arr.sort((a, b) => b - a); 
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] !== arr[0]) {
//       return arr[i];
//     }
//   }

//   return null;
// }




