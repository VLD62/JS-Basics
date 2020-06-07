function beehaveDefense(beesCount, bearHealth, bearDamage){
    beesCount = Number(beesCount);
    bearHealth = Number(bearHealth);
    bearDamage = Number(bearDamage);
    while (beesCount >= 100){
        beesCount -= bearDamage;
        bearHealth -= beesCount * 5;
        if (bearHealth  <= 0){
            console.log(`Beehive won! Bees left ${beesCount}.`);
            break;
        }
    }
    if (beesCount < 100){
        if (beesCount < 0) {beesCount = 0};
        console.log(`The bear stole the honey! Bees left ${beesCount}.`);
    }
}

beehaveDefense(1000, 10000, 100)