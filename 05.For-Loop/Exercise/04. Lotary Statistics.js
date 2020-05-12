function lotaryStatistics(num){
    num = Number(num)
    let odd_count = 0
    let even_count = 0
    let odd_ends_seven_count = 0
    let hundreds_count = 0
    for (let i = 1; i <= num; i++){
        if (100 % i == 0) {
            hundreds_count += 1
        }
        if (i % 2 == 0){
            even_count += 1
        } else {
            if (i < 10){
                odd_count += 1
            }
            if (i % 10 == 7){
                odd_ends_seven_count += 1
            }
        }
    }
    odd_count = (odd_count / num) * 100
    even_count = (even_count / num) * 100
    odd_ends_seven_count = (odd_ends_seven_count / num) * 100
    hundreds_count = (hundreds_count / num) * 100
    console.log(`${odd_count.toFixed(2)}%`)
    console.log(`${even_count.toFixed(2)}%`)
    console.log(`${odd_ends_seven_count.toFixed(2)}%`)
    console.log(`${hundreds_count.toFixed(2)}%`)
}