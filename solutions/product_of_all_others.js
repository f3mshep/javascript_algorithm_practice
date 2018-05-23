// You have an array of integers, and for each index you want to find the
// product of every integer except the integer at that index.

// Write a method get_products_of_all_ints_except_at_index() that takes an
// array of integers and returns an array of the products.

// For example, given:
// [1, 7, 3, 4]
// your method would return:
// [84, 12, 28, 21]

//naive brute force O(n^2)

function naiveProductOfAllOthers(nums){
  let res = []
  let product = 1
  for (const [index_a, num_a] of nums.entries()) {
    for (const [index_b, num_b] of nums.entries()) {
      if(index_a != index_b){
        product = product * num_b;
      }
    }
    res.push(product);
    product = 1;
  }
  return res;
};


//Linear time O(n)

function productOfAllOthers(nums) {
  let productsBeforeIndex = [1];
  let productsAfterIndex = [1];
  let res = []
  let beforeIndex = 0;
  let afterIndex = nums.length - 1;
  let beforeProduct = 1;
  let afterProduct = 1;
  while (beforeIndex < nums.length - 1) {
    beforeProduct = nums[beforeIndex] * beforeProduct
    afterProduct = nums[afterIndex] * afterProduct
    productsAfterIndex.unshift(afterProduct)
    productsBeforeIndex.push(beforeProduct)
    beforeIndex++
    afterIndex--
  }
  beforeIndex = 0
  afterIndex = 0
  for (let index = 0; index < nums.length; index++) {
    debugger
    res.push(productsBeforeIndex[index] * productsAfterIndex[index])
  }
  return res
}

productOfAllOthers([2,4,5,3])

60, 15, 3, BLANK
BLANK, 2, 8, 40
