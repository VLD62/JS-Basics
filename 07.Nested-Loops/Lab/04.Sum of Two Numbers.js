function sumOfTwoNumbers(input){
    firstNum = Number(input.shift());
    secondNum = Number(input.shift());
    magicNum = Number(input.shift());
    let combinationNumber = 0;
    let combinationFound = false;
    for (let i = firstNum; i <= secondNum; i++){
        for (let j = firstNum; j <= secondNum; j++){
            combinationNumber++;
            if (i + j == magicNum){
                console.log(`Combination N:${combinationNumber} (${i} + ${j} = ${magicNum})`);
                combinationFound = true;
                break;
            }
        }
    }
    if(!combinationFound){
        console.log(`${combinationNumber} combinations - neither equals ${magicNum}`)
    }
}