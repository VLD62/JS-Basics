function honeyWinterReserves(input) {
    const requiredHoney = Number(input.shift());
    let totalCollectedHoney = 0;
    let cmd = input.shift();
    let collected = false;
    while (cmd !== "Winter has come") {
        if (isNaN(cmd)) {
            let period = 6;
            let honeyPerBee = 0;
            while (period > 0) {
                honeyPerBee += Number(input.shift());
                period--;
            }
            if (honeyPerBee < 0 ){
                console.log(`${cmd} was banished for gluttony`);
            }
            totalCollectedHoney += honeyPerBee
            if (totalCollectedHoney >= requiredHoney) {
                collected = true;
                console.log(`Well done! Honey surplus ${(totalCollectedHoney - requiredHoney).toFixed(2)}.`);
                break;
            }
        }
        cmd = input.shift();
    }
    
    if (!collected){
        if (totalCollectedHoney >= requiredHoney) {
            console.log(`Well done! Honey surplus ${(totalCollectedHoney - requiredHoney).toFixed(2)}.`);
        } else {
            console.log(`Hard Winter! Honey needed ${(requiredHoney - totalCollectedHoney).toFixed(2)}.`);
        }
    }


}

honeyWinterReserves([1000, "Maya", 50, 10.5, 19.5, 30, 100, 100, "Winter has come"])
honeyWinterReserves([300, "Beeatrice", 50, -10, 40, 30, 100, 100, "Winter has come"])
honeyWinterReserves([1000, "Maya",-50, -10
    ,-20.70
    ,20.40
    ,10.30
    ,40
    ,"Yama"
    ,50
    ,10
    ,20
    ,30
    ,100
    ,100
    ,"Winter has come"
    ])