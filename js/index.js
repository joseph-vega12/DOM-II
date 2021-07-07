// Your code goes here 
const heroImg = document.querySelector(".intro img");
const title = document.querySelector(".intro h2");
const letsGoText = document.querySelector(".content-section .text-content h2");

// letsGoText.addEventListener("mouseover", function (event) {
//     event.target.style.border = "15px dotted black";
// });

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        title.style.border = "20px solid red";
    }
});

letsGoText.addEventListener("wheel", function (event) {
    event.preventDefault();
    // event.target.style.color = 'pink';
    event.target.style.fontSize = "80px";
});


window.addEventListener('load', function (event) {
    setTimeout(() => {
        title.style.color = "pink";
    }, 1000);
});

const nav = document.querySelector(".nav");
const bottomImg = document.querySelector('.content-destination img');
// const funBusText = document.querySelector(".logo-heading");
// const navText = document.querySelector(".logo-heading");
const button = document.querySelector(".btn");

nav.addEventListener('focus', (event) => {
    event.target.style.fontSize = '20px';
}, true);

document.addEventListener("scroll", function (event) {
    setTimeout(() => {
        heroImg.style.display = "none";
    }, 1000)
});

// funBusText.addEventListener("select", function(event){
// funBusText.textContent
//     alert("HELLO CHANCHO");
// });

button.addEventListener("dblclick", function (event) {
    event.target.style.background = "red";
});

const body = document.querySelector("body");

window.addEventListener("resize", function(event){
    body.style.border = "30px dotted black";
});



