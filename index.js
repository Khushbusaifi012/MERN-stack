console.log("Namaste Duniya")
console.log("My name is khushbu")
console.log("I am studying javascript.")

//Variables and data types;;
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

//Condtional statements;;
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

//1.Switch Statement;;;
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

let dish = 9;
switch (dish){
    case 1:console.log('Pizza');
    break;
    case 2:console.log('Burger');
    break;
    case 3:console.log('Rajma');
    break;
    case 4:console.log('momos');
    break;
    default :console.log('Pasta');
};

const f=10;
console.log(f);

//Loops and Strings;;
for (let p=1; p<=10; p++){
    console.log("Python")
}

for (let o=1; o<=20; o++){    //counting print
    console.log(o)
}

for(let am=5; am>0; am--){
    console.log(am)
}

for (let gh =1; gh<=6; gh++){
    if(gh==4){
        break;
    }
    else{
        console.log(gh);
    }
}

for (let op=1; op<=4; op++){
    if(op==3)
        continue;
    else
        console.log(op);
}

let s=1;  //while loop
while(s<=10){
    console.log("Python");
    s++;
}

let o=1;
do{   //do while
    console.log(o);
    o++;
}while(o<6);

let firstnName="love"
let lastName="python"
console.log(typeof(lastName));

let firstDish='MOMOS';
let secondDish='Pasta';
let dishname='love';
console.log(dishname);

let op1='English';
let op2='hindi'; //concatentation
let an=op1+op2;
console.log(an);

let string1="moBIle";
console.log(string1.length);   //length
console.log(string1.toUpperCase());   //uppercase
console.log(string1.toLowerCase());    //lowercase
console.log(string1.indexOf('B'));
console.log(string1.substring('e'));
console.log(string1.split(' '));

let sentence='my name is python language.';
let words=sentence.split(' ');
console.log(words);
console.log(words.join('-'));

function myFunction(){  //function method
    console.log('khushbu');
}
myFunction()   //call the function

function printCounting(){
    for (let i=1; i<=10; i++){
        console.log(i)
    }
}
printCounting()

function printingNumber(num){  //parameter
    console.log('printing number:',num);
}
printingNumber(5);    //Argument

function getSum(a,b,c){
    let sum=a+b+c;
    return sum;
}
let assum = getSum(1,2,3);
console.log('sum : ',assum);

function getMultiply(a,b){
    return a*b;
}
console.log(getMultiply(2,19));
console.log(getMultiply(2,20));

const greet = (bless) => {    //arrow functions
    return `hello, ${bless}!`;
};
console.log(greet('Khushbu'));  //output is : hello khushbu"

