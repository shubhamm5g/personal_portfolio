const color1=document.querySelector(".card_color-opt1")
const color2=document.querySelector(".card_color-opt2")
const card=document.querySelector(".card")
color1.addEventListener('click',function(){
    card.style.backgroundColor="rgb(160, 245, 32)"
})
color2.addEventListener('click',function(){
    card.style.backgroundColor="violet"
})



function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }