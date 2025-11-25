console.log("Namaste Duniya")
console.log("My name is khushbu")
console.log("I am studying javascript.")

var age=25;
if(true){
    console.log(age)
}

function solve(){
    var age=25;
    console.log(age);
}
console.log(age);
solve;

let a=10;
console.log(a)

const b =100;
console.log(a);

let number=20.2737846;
marks="khushbu"
console.log(number)
console.log(marks)

let c;
console.log(c) 

student=false;
console.log(typeof(student))

name="khushbu";
console.log(typeof(name));

float=412.423;
console.log(typeof(float))

g=true;
console.log(typeof(g));

let h =20;
let i =90;
console.log (h+i);
console.log (h*i);
console.log(h/i);
console.log(h%i);
console.log(h**i);
console.log(h-i);

console.log(10>5);
console.log(9<3);
console.log('6' == 6);   //strict equality
console.log('5'=== 5);   //loose equality
console.log(5!=3);

let umar=5;
let status1=(umar<20) ?'I can vote':'I cannot vote'
console.log(status1)

let ans=(true && true && true);
console.log(ans)
let q=(true || true || true);
console.log(q)
let ques=!(false);
console.log(ques);

console.log(false || 7);
console.log ('khushbu' && 9);

console.log(2 | 5);
console.log (10 >> 1);

let u=78;
if (age>=18){
    console.log("can vote");
}
else{
    console.log('cannot vote');
}

let rom=10;
if(rom ==1){
    console.log('A');
}
else if(rom ==2){
    console.log('B');
}
else if (rom==3){
    console.log('C')
}
else if (rom==4){
    console.log("D")
}
else if (rom==5){
    console.log("E")
}
else{
    console.log('not available');
}

let n=3;
switch(n){
    case 1:console.log('A');
    break;
    case 2:console.log('B');
    break;
    case 3:console.log('C'); 
    break ; 
    case 4:console.log('D');
    break;
    case 5:console.log('E');
    break;
    default: console.log('F');
}