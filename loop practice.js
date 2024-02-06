// Numba 1
let a=0
for(let i=0; i<=1000; i++){
    a += i;
}
console.log(a)

// numba 2
let b =0
for(let i=93; i<=845; i+=2){
    b+=i;
}
console.log(b)

// numba 3
let n=1
for(i=6; i<=400; i++){
    if(i%6==0){
        n *= i;
    }
}
console.log(n)

//numba 4
let check=101
var prime=true
for(i=2; i<=Math.sqrt(check);i++){
    if((check%i==0)||(check==1)){
        prime=false
        break;
    }
}
if(prime){
    console.log("Tis truly prime")
}else{
    console.log("Tis not prime")
}

//numba 6
let num=5
primes=[]
while(num<100){
    for(i=2; i<=Math.sqrt(num);i++){
        num++
        if((num%i<=1)&&(num!=1)){
            primes.push(num)
        }else{
            continue;
        }
    }
}
console.log(primes)

//numba 7
let fac = 4
var result = fac
if(fac == 1 || fac==0){
    result = 1
}else{
    while(fac>1){
        fac--
        result *= fac
    }
}
console.log(result)

//numba 8
let x=16, y=32
let smallest=Math.min(x,y)
let gcf=1
for (i=1; i<=smallest; i++){
    if(x%i==0 && y%i==0){
        gcf=i
    }
}
console.log(gcf)

//numba 9
var height=5
var star = ""
for(i=1; i<=height; i++){
    star+="#"
    console.log(star)
}

//numba 10
var thick=5, triangle= ""
for(i=1; i<=thick; i++){
    triangle+="#"
    console.log(triangle)
}
// for (var i = triangle-1; i>=0; i--){
//     triangle = triangle.slice(0, -1)
//     console.log(triangle);
// }

// for(i; i<=1; i--){
//     triangle+="#"
//     console.log(triangle)
// }
