function sumOfSeries(num){
    num  = Number(num)
    let total_sum = 0
    for (let i = 0; i <= num; i++){
        total_sum += i * i
    }
    console.log(total_sum)
}