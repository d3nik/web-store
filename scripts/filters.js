//constants and variables
const menBtn = document.querySelector(".men_btn");
const womenBtn = document.getElementById("women_btn");
const jeweleryBtn = document.getElementById("jewelery_btn");
const reloadText = document.getElementById("reload");

let mainClothes = document.getElementsByClassName("main-clothes");
let men = document.getElementsByClassName("men");
let women = document.getElementsByClassName("women");
let jewelery = document.getElementsByClassName("jewelery");



// onclick filter functions
menBtn.onclick = () => {
    for (let i = 0; i < mainClothes.length; i++) {
        if (mainClothes[i].classList.contains("men")) {
            mainClothes[i].classList.remove("hidden");
        } else {
            mainClothes[i].classList.add("hidden");
        }
    }
}


womenBtn.onclick = () => {
    for (let i = 0; i < mainClothes.length; i++) {
        if (mainClothes[i].classList.contains("women")) {
            mainClothes[i].classList.remove("hidden");
        } else {
            mainClothes[i].classList.add("hidden");
        }
    }
}


jeweleryBtn.onclick = () => {
    for (let i = 0; i < mainClothes.length; i++) {
        if (mainClothes[i].classList.contains("jewelery")) {
            mainClothes[i].classList.remove("hidden");
        } else {
            mainClothes[i].classList.add("hidden");
        }
    }
}

reloadText.onclick = () => {
    window.location.reload();
}