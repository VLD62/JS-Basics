function sequence2kPlus1(num){
    num = Number(num);
    let k = 1;
    while (k <= num){
        console.log(k);
        k = k * 2 + 1
    }
}
sequence2kPlus1(8)