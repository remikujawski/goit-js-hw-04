"use strict";

function isEnoughCapacity(products, containerSize){
    let sum = 0;
    const quantities = Object.values(products);
    for (const quantity of quantities) {
        sum += quantity;
    }
    return sum <= containerSize;
}
