//variables

const colorBtn1 = document.querySelector('.colorBtn');
const bodypcg =document.querySelector("body");
 //creating an array to pick a color
const color =['yellow','red','green','blue','brown','gray'];

//changes

colorBtn1.addEventListener('click',changeColor);

function changeColor(){
bodypcg.style.backgroundColor=color[1];
let random = Math.floor(Math.random()* color.length);
bodypcg.style.backgroundColor=color[random];







}