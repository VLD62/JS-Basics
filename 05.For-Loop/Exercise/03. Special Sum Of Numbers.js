function specialSumOfNumbers(start, end, divider){
    start = Number(start)
    end = Number(end)
    divider = Number(divider)
    let total_sum = 0
    for (let i = start; i <= end; i++){
        if (i % divider == 0){
            total_sum += i
        }
    }
    console.log(total_sum)
}