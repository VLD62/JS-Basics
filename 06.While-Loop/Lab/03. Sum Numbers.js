function sumNumbers(input){
    let cmd = input.shift();
    let total_sum = 0;
    while (cmd !== "Stop") {
        total_sum += Number(cmd);
        cmd = input.shift();
    }
    console.log(total_sum)
}

sumNumbers([10,20,30,45, "Stop"])