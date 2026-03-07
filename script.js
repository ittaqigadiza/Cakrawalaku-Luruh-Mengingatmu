document.addEventListener("DOMContentLoaded", function () {

  const viewer = document.getElementById("viewer");
  const viewerImg = document.getElementById("viewer-img");
  const closeBtn = document.getElementById("viewer-close");

  const images = document.querySelectorAll(".card img, .grid img, .cast-grid img");

  images.forEach(function (img) {
    img.addEventListener("click", function () {
      viewer.style.display = "flex";
      viewerImg.src = img.src;
    });
  });

  closeBtn.onclick = function () {
    viewer.style.display = "none";
  };

  viewer.onclick = function (e) {
    if (e.target === viewer) {
      viewer.style.display = "none";
    }
  };
});


