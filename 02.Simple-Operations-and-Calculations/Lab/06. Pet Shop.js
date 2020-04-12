function petShop(dogs_count, others_count){
    let total_amount = dogs_count * 2.5 + others_count * 4;
    console.log(`${total_amount.toFixed(2)} lv.`)
}

petShop(5, 5)