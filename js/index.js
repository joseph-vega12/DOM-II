// Your code goes here 
const heroImg = document.querySelector(".intro img");
const title = document.querySelector(".intro h2");
const letsGoText = document.querySelector(".content-section .text-section h2");

heroImg.addEventListener("mouseover", function (event) {
    event.target.style.border = "15px dotted black";
});

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        title.style.border = "20px solid red";
    }
});

// letsGoText.addEventListener("wheel", function(event){
//     event.target.style.color = 'pink';
// });


window.addEventListener('load', function(event){
    setTimeout( () => {
        title.style.color = "pink";
    }, 1000);
});
