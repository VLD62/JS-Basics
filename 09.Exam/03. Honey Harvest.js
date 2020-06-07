function honeyHarvest(flowerType, count, season){
    count = Number(count);
    let totalHoney = 0;
    spring = {
        Sunflower: 10,
        Daisy: 12,
        Lavender: 12,
        Mint: 10
    }
    summer = {
        Sunflower: 8,
        Daisy: 8,
        Lavender: 8,
        Mint: 12
    }
    autumn = {
        Sunflower: 12,
        Daisy: 6,
        Lavender: 6,
        Mint: 6
    }

    if(season == "Summer"){
        totalHoney = summer[flowerType] * count;
        totalHoney += 0.1 * totalHoney;
    } else if(season == "Autumn"){
        totalHoney = autumn[flowerType] * count;
        totalHoney -= 0.05 * totalHoney;
    } else {
        if (["Daisy" ,"Mint"].includes(flowerType))
            totalHoney = (spring[flowerType] + 0.10 * spring[flowerType]) * count;
        else {
            totalHoney = spring[flowerType] * count;
        }
    }
    console.log(`Total honey harvested: ${totalHoney.toFixed(2)}`)
}