function beehavePopulation(population, years) {
    population = Number(population);
    years = Number(years);
    for (let index = 1; index <= years; index++) {
        population += Math.floor(population / 10) * 2;
        if (index % 5 == 0) {
            population -= Math.floor(population / 50) * 5;
        }
        population -= Math.floor(population / 20) * 2;
    }
    console.log(`Beehive population: ${population}`)
}
beehavePopulation(1000, 23)