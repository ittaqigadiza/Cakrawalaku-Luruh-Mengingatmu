document.addEventListener("DOMContentLoaded", () => {

const viewer = document.getElementById("viewer");
const viewerImg = document.getElementById("viewer-img");

const prev = document.getElementById("prev");
const next = document.getElementById("next");
const close = document.getElementById("close");

const images = document.querySelectorAll(".grid2 img, .grid4 img");

let index = 0;

images.forEach((img, i) => {
img.addEventListener("click", () => {
viewer.style.display = "flex";
viewerImg.src = img.src;
index = i;
});
});

next.onclick = () => {
index++;
if (index >= images.length) index = 0;
viewerImg.src = images[index].src;
};

prev.onclick = () => {
index--;
if (index < 0) index = images.length - 1;
viewerImg.src = images[index].src;
};

close.onclick = () => {
viewer.style.display = "none";
};

viewer.onclick = (e) => {
if (e.target === viewer) {
viewer.style.display = "none";
}
};

});
