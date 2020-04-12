function yardGreening(square_meters) {

    let final_price = square_meters * 7.61;
    let discount = final_price * 0.18;
    let discounted_price = final_price - discount;
    console.log(`The final price is: ${discounted_price.toFixed(2)} lv.\nThe discount is: ${discount.toFixed(2)} lv.`)

}

yardGreening(540)