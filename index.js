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

let obj={
    'name':'khushbu',
    'age':21,
    'weight':50,
    'height': '6ft inch'
};
console.log(obj);

let obj1={
    n:'khushbu',
    h:15,
    w:60,
    gr:function(){
        console.log('Hello my name is khushbu');
    }
};
console.log(obj1)
obj1.gr();
console.log(typeof(obj1))

let arr1=[12,3,4,7,9]  //creation of array
let brr=new Array('love',0,1);
brr.push('khushbu')   //to add the items
brr.pop();   //to remove the items
brr.shift();
brr.unshift();
brr.push(20);
brr.push(40);
brr.push(70);
brr.splice(1,2,'kunal');  //to remove the items and add acc to yours.
console.log(arr1);
console.log(brr);
console.log(typeof(arr1));
console.log(typeof(brr));
console.log(arr1[3]);
console.log(brr[2]);

let arr=[1,2,3,4]  //map function
let ansArr=arr.map((num)=>{
    return num*num
})
console.log(ansArr);

let arr2=[10,20,30,40,50,60,99,80,76,22,11];
let EvenArry=arr2.filter((number)=>{
    if(number%2==0){   //to find out the even numebr;
        return true;
    }
    else{
        return false;
    }
});
console.log(EvenArry);

let aRRay=[10,20,30,22,34,5,67,8];
let ans1=aRRay.reduce((acc,curr)=>{   //reduce function
    return acc+curr;    
},0);
console.log(ans1);
console.log(aRRay.indexOf(22));

let marry=[10,20,3040,89,90];
marry.forEach((value,index)=>{
    console.log("Number: ",value,"Index:",index);
})

let crr=[10,20,30,40];
for (let value of crr){
    console.log(value);
}

let grr=[10,20,30,40];
function getSum(grr){
    let len=grr.length;
    let sum=0;
    for (let index=0; index<len; index++){
        sum=sum+grr[index];
    }
    return sum;
}
let totalSum=getSum(grr);
console.log(totalSum);

function sayMyName(finalName){
    console.log(finalName);    //function hoisting
}
sayMyName('khushbu');

var age=30;
console.log(age);  //variable hoisting

function greetMe(gret,fullName){
    console.log('Hello',fullName);
    gret();
}
function gret(){
    console.log('Good Morning');
}
greetMe(gret,'khushbu');

function solve(n){
    return function(n){
        return n*n;
    }
}
let Answer=solve(5);
let finalAns=Answer(10);
console.log(finalAns);

const ar=[
    function(a,b){
        return a+b;
    },

    function(a,b){
        return a-b;
    },

    function(a,b){
        return a*b;
    },
]

let first=ar[0];
let Ans=first(10,5);
console.log(Ans);

var age =14;   //global scope

function sayHello(){
    var name="Earth";      //local scope    
    console.log("Hello World",name);
}
sayHello();

let marksA=100;
console.log(marksA);

class Human{    //class and object
    age=13;  //public
    wt=80;  //private
    ht=180;

walking(){
    console.log("Human is walking");
}
running(){
    console.log("Human is running");
}
}
let object=new Human();
console.log(object.age);
console.log(object.wt);
console.log(object.ht);

function sayName(myname='saheen'){  //default parameter
    console.log("My name is",myname);  //argument not provided
}
sayName(); //no argument provided
sayName('khushbu'); //argument provided

console.log(Math.PI);
console.log(Math.max(10,20,30,40,50,60));
console.log(Math.min(10,20,30,40,50,60));
console.log(Math.sqrt(16));
console.log(Math.round(1.6))
console.log(Math.floor(4.9))
console.log(Math.ceil(4.1));
console.log(Math.random(1));
console.log(Math.pow(2,2));

let current = new Date();
console.log(current);

let format={
    age:12,
    wt:78,
    ht:190
};
console.log(format);
format.color="white";
console.log(format);

let src={  //spread operator
    age:12,  //shallow copy
    wt:78,
    ht:190
};

// //let dest ={...src};
// src.age=15;
// console.log(src);
// console.log(dest);

// let dest=Object.assign({},src);  //deep copy & assigning new object
// src.age=20;  //assigning new value to src
// console.log(src);
// console.log(dest);  

let dest={};
//cloning using iteration
for (let key in src){
    console.log(key);
    let newKey=key;
    let newValue=src[key];
    //insert newkey and newvalue into dest
    dest[newKey]=newValue;
}
src.age=30;
console.log(src);
console.log(dest);

//compile time error;
// console.log(9;

//runtime error;
// console.log(x);  //reference error

//Handling error using try catch;
// try{
//     console.log(x);
// }
// catch(e){     //catch the error
//     console.log("Error occurred:",e.message);
// }

// try{
//     console.log("Start of try block");
//     //reference error
//     console.log(y);
//     console.log("End of try block");
// }
// catch(e){
//     console.log("I am inside catch block");
//     console.log('Your error is here: ',e);
// }
// finally{
//     console.log("I will run everytime .I am inside finally block");
// }

// try{
//     console.log(x);
// }
// catch(e){
//     throw new Error("Custom error message: An error occurred in the catch block");  //custom error
// }

//DOM Manipultation;;Acessing element;;
function changetext(){
    let p2=document.getElementById('p2');
    p2.textContent="Hello khushbu";
}

let p2=document.getElementById('p2');
p2.addEventListener('click',changetext);

// p2.removeEventListener('click',changetext);  //to remove event listener

let anchorElement=document.getElementById('fanchor');

anchorElement.addEventListener('click',function(event){
    event.preventDefault();  //to prevent default behaviour
    anchorElement.textContent="You clicked me!";
});

let paras=document.querySelectorAll('p');  //accessing multiple elements
for (let i=0; i<4; i++){
    let para=paras[i];
    para.addEventListener('click',function(){
        alert("You clicked paragraph: "+(i+1));
    })
}

