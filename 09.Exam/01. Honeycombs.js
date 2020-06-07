function honeyCombs(beesCount, flowersCount){
    beesCount = Number(beesCount);
    flowersCount = Number(flowersCount);

    const totalHoney = beesCount * flowersCount * 0.21;

    console.log(`${Math.floor(totalHoney / 100)} honeycombs filled.`)
    console.log(`${(totalHoney - Math.floor(totalHoney / 100)*100).toFixed(2)} grams of honey left.`)
}

honeCombs([25,6400])