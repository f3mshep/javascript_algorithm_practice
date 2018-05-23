// Given an array of integers, find the highest product you can get from three
// of the integers.
// The input arrayOfInts will always have at least three integers.

function highestProductOfThree(nums){

  let productOfThree = nums[0] * nums[1] * nums[2]
  let highestProduct = nums[0];
  let lowestProduct = nums[0];
  let highestNum = nums[0];
  let lowestNum = nums[0];

  for (const num of nums) {
    if (highestProduct * num > productOfThree){
      productOfThree = highestProduct * num;
    }
    if (lowestProduct * num > productOfThree) {
      productOfThree = lowestProduct * num;
    }
    if (highestNum * num > highestProduct){
      highestProduct = highestNum * num;
    };
    if (lowestNum * num < lowestProduct){
      lowestProduct = lowestNum * num;
    };
    if (num > highestNum){
      highestNum = num;
    };
    if (num < lowestNum){
      lowestNum = num;
    };
  };

  return productOfThree
}
