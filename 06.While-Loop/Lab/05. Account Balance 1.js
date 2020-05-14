function accountBalance(input){
    let payments = Number(input.shift());
    let total_sum = 0;
    while(payments > 0){
        payments -= 1;
        let temp_sum = Number(input.shift());
        if (temp_sum > 0){
            console.log(`Increase: ${temp_sum.toFixed(2)}`)
        } else {
            console.log("Invalid operation!")
            break;
        }
        total_sum += temp_sum
    }
    console.log(`Total: ${total_sum.toFixed(2)}`)
}
