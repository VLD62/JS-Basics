function trainTheTrainers(input){
    let n = Number(input.shift());
    let cmd = input.shift();
    let presentationsCount = 0;
    let totalMarks = 0;

    while (cmd != "Finish"){
        let currentMarks = 0;
        for (let i = 0; i < n; i++){
            currentMarks += Number(input.shift());
        }
        console.log(`${cmd} - ${(currentMarks/n).toFixed(2)}.`);
        totalMarks += currentMarks/n;
        presentationsCount++;
        cmd = input.shift();
    }
    console.log(`Student's final assessment is ${(totalMarks/presentationsCount).toFixed(2)}.`)
}

trainTheTrainers([3
    ,'Arrays'
    ,4.53
    ,5.23
    ,5.00
    ,'Lists'
    ,5.83
    ,6.00
    ,5.42
    ,'Finish'
      
])