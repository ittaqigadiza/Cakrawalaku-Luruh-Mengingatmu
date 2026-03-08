document.addEventListener("DOMContentLoaded", () => {

const viewer = document.getElementById("viewer");
const viewerImg = document.getElementById("viewer-img");
const closeBtn = document.getElementById("viewer-close");

const images = document.querySelectorAll(".grid2 img, .grid4 img");

images.forEach(img=>{
img.addEventListener("click",()=>{
if(viewer){
viewer.style.display="flex";
viewerImg.src = img.src;
}
});
});

if(closeBtn){
closeBtn.onclick=()=>{
viewer.style.display="none";
};
}

if(viewer){
viewer.onclick=(e)=>{
if(e.target===viewer){
viewer.style.display="none";
}
};
}

const elements = document.querySelectorAll(
"header h1, .banner, .part-title, .grid2 img, .grid4 img"
);

elements.forEach(el=>{
el.classList.add("reveal");
});

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

