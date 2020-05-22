function equalSumsEvenOddPosition(input) {
    let first_num = Number(input.shift())
    let second_num = Number(input.shift())
    let all_nums = ""
    for (let j = first_num; j <= second_num; j++) {
        let evenSum = 1;
        let oddSum = 1;
        let index = "" + j;
        for (let i = 0 ; i < index.length; i++){
            if (i % 2 == 0){
                evenSum += Number(index[i])
            } else {
                oddSum += Number(index[i])
            }
        }

        // If the products are equal  
        if (evenSum == oddSum){
            all_nums += index + " ";
        }
    }
    console.log(all_nums)
}
equalSumsEvenOddPosition([100000,
    100002
])