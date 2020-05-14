function minNumber(input){
    let num = Number(input.shift());
    let min_num = Number(input.shift());
    for (num - 1; num > 0; num--){
        let temp_num = Number(input.shift());
        if (temp_num < min_num) {
            min_num = temp_num
        }
    }
    console.log(min_num)
}