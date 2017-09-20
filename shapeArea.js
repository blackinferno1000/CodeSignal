function shapeArea(n) {
//initial area is 1 cube
    let area = 1;
    //iterates n times and adds (4*i) to the area
    for(let i = 1;i<n;i++){
        area += 4 * i;
    }
return area;
}
