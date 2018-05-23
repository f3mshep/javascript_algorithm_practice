function naiveStockSeller(stockPrices){
  let tmp
  let max = stockPrices[1] - stockPrices[0]
  for (const [purchaseIndex, purchaseValue] of stockPrices.entries()){
    saleIndex = purchaseIndex + 1
    while(saleIndex < stockPrices.length){
      saleValue = stockPrices[saleIndex]
      tmp = saleValue - purchaseValue
      if(tmp > max) max = tmp
      saleIndex++
    }
  };
  return max
}

// O(n^2)

function stockSeller(stockPrices){
  let max = stockPrices[1] - stockPrices[0];
  let tmp;
  minPrice = stockPrices[0];
  for (let index = 1; index < stockPrices.length; index++) {
    const purchaseValue = stockPrices[index];
    tmp = purchaseValue - minPrice
    if (tmp > max) max = tmp
    if (minPrice > purchaseValue) minPrice = purchaseValue;
  }
  return max
}

//O(n)