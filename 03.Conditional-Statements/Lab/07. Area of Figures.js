function areaOfFigures(figure, sideA,sideB){
    let area = 0
    if (figure == 'square') {
        area = Math.pow(Number(sideA), 2)
    } else if (figure == 'rectangle') {
        area =  Number(sideA) * Number(sideB)
    } else if (figure == 'circle') {
        area = Math.PI * (Math.pow(Number(sideA), 2))
    } else  {
        area = (Number(sideA) * Number(sideB)) / 2
    }
    console.log(area.toFixed(3))
}