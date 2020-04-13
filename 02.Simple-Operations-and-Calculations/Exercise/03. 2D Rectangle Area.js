function rectangleArea(x1, y1, x2, y2){
    console.log((Math.abs(x1-x2) * Math.abs(y1-y2)).toFixed(2))
    console.log((2 * (Math.abs(x1-x2) + Math.abs(y1-y2))).toFixed(2))
}