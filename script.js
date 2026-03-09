document.addEventListener("DOMContentLoaded", () => {

const viewer = document.getElementById("viewer");
const viewerImg = document.getElementById("viewer-img");
const closeBtn = document.getElementById("viewer-close");

document.querySelectorAll(".card img, .grid img, .cast-grid img").forEach(img=>{
img.addEventListener("click",()=>{
viewer.style.display="flex";
viewerImg.src = img.src;

setTimeout(()=>{
viewer.classList.add("show");
},10);

});
});

closeBtn.onclick=()=>{
viewer.classList.remove("show");

setTimeout(()=>{
viewer.style.display="none";
},200);
};

viewer.onclick=(e)=>{
if(e.target===viewer){

viewer.classList.remove("show");

setTimeout(()=>{
viewer.style.display="none";
},200);

}
};

const elements = document.querySelectorAll(
"header h1, .author, .quote, .section-ornament, .card img, .grid img, .cast-grid img, .episode-card"
);

const observer = new IntersectionObserver(entries=>{
entries.forEach(entry=>{

if(entry.isIntersecting){
entry.target.classList.add("show");
}else{
entry.target.classList.remove("show");
}

});
},{
threshold:0.15
});

elements.forEach(el=>{
observer.observe(el);
});

document.addEventListener("contextmenu", function(e){
if(e.target.tagName==="IMG"){
e.preventDefault();
}
});

document.querySelectorAll("img").forEach(img=>{
img.setAttribute("draggable","false");
});

document.addEventListener("selectstart", function(e){
if(e.target.tagName==="IMG"){
e.preventDefault();
}
});

});
