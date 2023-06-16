var a=Math.ceil(Math.random()*100);
var count=0;
console.log(a);
function fun(){
 const input=parseInt(document.getElementById("input").value);
 if(input==a){
    document.getElementById("result").textContent="Congratulations You Have Won the Guess in "+count+" Tries";
 }
 else if(input>a)
 {
    document.getElementById("result").textContent="Try Lesser Number"; 
    count++;
 }
 else{
    document.getElementById("result").textContent="Try Greater Number";
    count++;
 }
 
 }