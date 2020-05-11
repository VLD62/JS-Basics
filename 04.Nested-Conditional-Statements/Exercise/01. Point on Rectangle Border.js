function pointOnRectangleBorder(x1, y1, x2, y2, x, y){
    x = Number(x)
    y = Number(y)
    x1 = Number(x1)
    y1 = Number(y1)
    x2 = Number(x2)
    y2 = Number(y2)
    if ( (x == x1 || x == x2) && (y >= y1 && y <= y2)
       || (y == y1 || y == y2) && (x >= x1 && x <= x2) ) {
        console.log("Border")
    } else {
        console.log("Inside / Outside")
    }
}