function numberPyramid(num) {
    num = Number(num);
    let current = 1;
    let isBigger = false;
    let printCurrentLine = "";
    for (let i = 1; i <= num; i++) {
        for (let j = 1; j < i; j++) {
            if (current > num) {
                isBigger = true;
                break;
            }
            printCurrentLine += current + " ";
            current++;
        }
        console.log(printCurrentLine);
        printCurrentLine = "";
        if (isBigger) {
            break;
        }
    }


}
numberPyramid(7)