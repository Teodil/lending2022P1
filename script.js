console.log('test');

let nav = document.getElementById("nav");
let closeIcon = document.getElementById("close-icon");
let burger = document.getElementById("burger");
let aHrefs = document.getElementsByTagName('a');
/*
console.log(nav);
console.log(closeIcon);
console.log(burger);
*/
function toogleNav(){
    nav.classList.toggle('open');
    burger.classList.toggle('open');
}
function closeNav(){
    nav.classList.remove('open');
}

burger.addEventListener('click',toogleNav);
closeIcon.addEventListener('click',closeNav);

for(let i=0;i < aHrefs.length; i++){
    aHrefs[i].addEventListener('click',closeNav);
}