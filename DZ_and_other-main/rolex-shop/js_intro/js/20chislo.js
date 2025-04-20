/*1
function square(base){
    return base * base;
}

function cube(base){
    return square(base)*base;
}

 console.log
 

 function rectangular_parallelepiped_volume(length, width, height){
    return length*width*height;
 }

 function pow(base,exp){
    if (exp>1){
        for(i=1;exp==i;++i){
            base=base*base;
        }
        return base;
    }
    else if (exp=0){
        return 1;
    }
    else{
        return base;
    }
}

console.log(pow(2,3))


function powRec(base,exp) {
    if (exp==0&&base==0||exp<0) return undefined;
    if (exp==0) return 1;
    if (base==0||base==1) return base;
    return base*powRec(base,exp-1);
}

console.log(powRec(5,2));


function factar(n) {
    if (n<0) return;
    if (n==0) return 1;
    return n*factar(n-1);
}
console.log(factar(5));
*/

function factarC(n) {
    if (n<0) return;
    if (n==0) return 1;
    let a=n;
    while (a>0){
        
    }
}
console.log(factarC(5));