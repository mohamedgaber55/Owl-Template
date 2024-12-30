// aos library
AOS.init();

// nav
let menuItems = document.querySelectorAll('.oUl li');
let menuItem = document.querySelectorAll('.oUl');
let landing = document.querySelector(".landing");
let myLeft = document.querySelector(".fa-angle-left");
let myRight = document.querySelector(".fa-angle-right");
let menue = document.querySelector(".fa-solid")
let ul = document.querySelector("header ul")
console.log(menue)
console.log(ul)

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    menuItems.forEach(menu => menu.classList.remove('clicked'));

    item.classList.add('clicked');
  });
});

// // navSmallMedia
menue.addEventListener('click', () => {
    if (ul.style.display === "block"){
        ul.style.display = "none";
        menue.style.color = "white";
    }else{
        ul.style.display = "block";
        menue.style.color = "#008f53";
    }
});

// change img
let arr = ["back-1.jpg", "back-2.jpg", "back-3.jpg"]
let cu = 0;

myRight.onclick = () => {
    landing.style.backgroundImage =`url("img/`+ arr[cu] +`")`
    cu++;
if (cu >= arr.length){
    cu =0;
}
}

myLeft.onclick = () => {
    landing.style.backgroundImage =`url("img/`+ arr[cu] +`")`
    cu--;
if (cu < 0 ){
    cu = arr.length-1;
}
}
// setInterval(() => {
//     let random = Math.floor(Math.random()*arr.length);

//     landing.style.backgroundImage =`url("img/`+arr[random] +`")`

// },2000)

// scroll button
let scBtn = document.querySelector("button");

window.onscroll = function(){
    if(window.scrollY >= 300){
        scBtn.style.display = "block";
    }else{
        scBtn.style.display = "none";
    }
}

scBtn.onclick = function(){
    window.scrollTo({
        top: 0,
        behavior:"smooth",
    });
}