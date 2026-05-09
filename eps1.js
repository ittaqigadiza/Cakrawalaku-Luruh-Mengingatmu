document.addEventListener("DOMContentLoaded", () => {

    const viewer = document.getElementById("viewer");
    const viewerImg = document.getElementById("viewer-img");
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");
    const closeBtn = document.getElementById("close");

    const images = document.querySelectorAll(".grid2 img, .grid4 img, .banner img");
    let currentIndex = 0;

    console.log("Gambar ditemukan:", images.length); // buat debugging

    function openViewer(index) {
        if (!images.length || index < 0 || index >= images.length) return;
        currentIndex = index;
        viewerImg.src = images[currentIndex].src;
        viewer.style.display = "flex";
        viewer.style.opacity = "0";
        setTimeout(() => {
            viewer.style.opacity = "1";
        }, 10);
    }

    function closeViewer() {
        viewer.style.opacity = "0";
        setTimeout(() => {
            viewer.style.display = "none";
        }, 300);
    }

    function prevImage() {
        if (images.length === 0) return;
        currentIndex--;
        if (currentIndex < 0) currentIndex = images.length - 1;
        viewerImg.src = images[currentIndex].src;
    }

    function nextImage() {
        if (images.length === 0) return;
        currentIndex++;
        if (currentIndex >= images.length) currentIndex = 0;
        viewerImg.src = images[currentIndex].src;
    }

    images.forEach((img, i) => {
        img.addEventListener("click", (e) => {
            e.stopPropagation();
            openViewer(i);
        });
    });

    if (prevBtn) {
        prevBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            prevImage();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            nextImage();
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            closeViewer();
        });
    }

    if (viewer) {
        viewer.addEventListener("click", (e) => {
            if (e.target === viewer) {
                closeViewer();
            }
        });
    }

    document.addEventListener("keydown", (e) => {
        if (viewer && viewer.style.display === "flex") {
            if (e.key === "ArrowLeft") {
                prevImage();
                e.preventDefault();
            } else if (e.key === "ArrowRight") {
                nextImage();
                e.preventDefault();
            } else if (e.key === "Escape") {
                closeViewer();
                e.preventDefault();
            }
        }
    });

    const elements = document.querySelectorAll(
        "header h1, .banner, .part-title, .grid2 img, .grid4 img"
    );

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show");
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: "0px 0px -80px 0px"
    });

    elements.forEach(el => {
        observer.observe(el);
    });

    document.querySelectorAll("img").forEach(img => {
        img.addEventListener("contextmenu", (e) => e.preventDefault());
        img.setAttribute("draggable", "false");
    });

    document.addEventListener("selectstart", (e) => {
        if (e.target.tagName === "IMG") e.preventDefault();
    });

    document.addEventListener("keydown", (e) => {
        if (e.ctrlKey && e.key === "u") e.preventDefault();
        if (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J")) e.preventDefault();
        if (e.key === "F12") e.preventDefault();
    });

    document.addEventListener("contextmenu", (e) => {
        if (e.target.tagName !== "A") e.preventDefault();
    });

});
