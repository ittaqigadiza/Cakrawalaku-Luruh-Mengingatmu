document.addEventListener("DOMContentLoaded", () => {

const viewer = document.getElementById("viewer");
const viewerImg = document.getElementById("viewer-img");
const closeBtn = document.getElementById("viewer-close");

const images = document.querySelectorAll(
".card img, .grid img, .cast-grid img"
);

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
"header h1, .author, .quote, .section-title, .section-ornament, .card img, .grid img, .cast-grid img, .episode-card"
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
threshold:0.15
});

elements.forEach(el=>{
observer.observe(el);
});

});
