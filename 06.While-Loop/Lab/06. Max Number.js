function maxNumber(input){
    let num = Number(input.shift());
    let max_num = Number(input.shift());
    for (num - 1; num > 0; num--){
        let temp_num = Number(input.shift());
        if (temp_num > max_num) {
            max_num = temp_num
        }
    }
    console.log(max_num)
}