document.addEventListener("DOMContentLoaded", () => {

const viewer = document.getElementById("viewer");
const viewerImg = document.getElementById("viewer-img");

const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const closeBtn = document.getElementById("close");

const images = document.querySelectorAll(".grid2 img, .grid4 img");

let index = 0;


images.forEach((img,i)=>{
img.addEventListener("click",()=>{
viewer.style.display="flex";
viewerImg.src = img.src;
index = i;
});
});


if(nextBtn){
nextBtn.addEventListener("click",(e)=>{
e.stopPropagation();
index++;
if(index >= images.length) index = 0;
viewerImg.src = images[index].src;
});
}


if(prevBtn){
prevBtn.addEventListener("click",(e)=>{
e.stopPropagation();
index--;
if(index < 0) index = images.length-1;
viewerImg.src = images[index].src;
});
}


if(closeBtn){
closeBtn.addEventListener("click",(e)=>{
e.stopPropagation();
viewer.style.display="none";
});
}


viewer.addEventListener("click",(e)=>{
if(e.target === viewer){
viewer.style.display="none";
}
});


const elements = document.querySelectorAll(
"header h1, .banner, .part-title, .grid2 img, .grid4 img"
);

const observer = new IntersectionObserver((entries)=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("show");
}else{
entry.target.classList.remove("show");
}
});
},{
threshold:0.25,
rootMargin:"0px 0px -120px 0px"
});

elements.forEach(el=>{
observer.observe(el);
});

});

document.addEventListener("contextmenu", function(e){
if(e.target.tagName === "IMG"){
e.preventDefault();
}
});

document.querySelectorAll("img").forEach(img=>{
img.setAttribute("draggable","false");
});

document.addEventListener("selectstart", function(e){
if(e.target.tagName === "IMG"){
e.preventDefault();
}
});
