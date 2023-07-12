function goup(){
    window.scrollTo(0,0);
  }
const button = document.querySelector('#talk');

// Add the class on button click
function addClassOnClick() {
 document.querySelector('#contactsec').classList.toggle('scale');
}
function removeClassWithDelay() {
 setTimeout(function() {
   document.querySelector('#contactsec').classList.remove('scale');
 }, 1500); // Remove the class after 5 seconds (adjust the delay as needed)
}
button.addEventListener('click', function() {
 addClassOnClick();
 removeClassWithDelay();
});
const boy = document.querySelectorAll('.boy') ;
const bg = document.querySelector('.bg') ;
Array.from(boy).forEach(e=>{
    e.classList.remove('bg');
})
setInterval(
    function hello(){
        setInterval(() => {
            let ran_pos = boy[Math.floor(Math.random()*2000 )];
            ran_pos.style.backgroundColor='white'
        },10 );
    },1000);
setInterval(
function hello(){
setInterval(() => {
let ran_pos = boy[Math.floor(Math.random()*2000)];
ran_pos.style.backgroundColor='w';
},10 );
},1000);
setInterval(
function hello(){
setInterval(() => {
let ran_pos = boy[Math.floor(Math.random()*2000)];
ran_pos.style.backgroundColor='green';
},10 );
},1000);
setInterval(
    function hello(){
    setInterval(() => {
    let ran_pos = boy[Math.floor(Math.random()*2000)];
    ran_pos.style.backgroundColor='black';
    },10 );
    },1000);



