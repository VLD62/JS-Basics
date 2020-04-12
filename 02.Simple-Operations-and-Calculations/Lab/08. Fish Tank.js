function fishTank(length, width, height, percentage) {
    let aquarium_capacity = length * width * height;
    let total_liters = aquarium_capacity * 0.001;
    console.log((total_liters * (1 - percentage * 0.01)).toFixed(3))
}

fishTank(105, 77, 89, 18.5)