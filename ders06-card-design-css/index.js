// import img1 from "./images/1.jpg";
const img = document.getElementById("img");
const firstImgBtn = document.getElementById("first-img");
const middleImgBtn = document.getElementById("middle-img");
const lastImgBtn = document.getElementById("last-img");

firstImgBtn.addEventListener("mouseover", () => {
    img.src = "images/1.jpg";
});


lastImgBtn.addEventListener("mouseover", () => {
    img.src = "images/3.jpg";
});


middleImgBtn.addEventListener("mouseover", () => {
    img.src = "images/2.jpg";
});