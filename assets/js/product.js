// Product Details Page's Product GAllery
const thumbs = document.querySelectorAll(".thumb");
const mainImage = document.getElementById("mainImage");

thumbs.forEach(thumb => {
    thumb.addEventListener("click", () => {
        document.querySelector(".thumb.active").classList.remove("active");
        thumb.classList.add("active");
        const img = thumb.querySelector("img").src;
        mainImage.src = img.replace("thumb", "product-big");
    });
});



// Product Details Page's Product Tab
const tabBtns = document.querySelectorAll(".tab-btn");
const tabPanes = document.querySelectorAll(".tab-pane");

tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        tabBtns.forEach(item => item.classList.remove("active"));
        tabPanes.forEach(item => item.classList.remove("active"));
        btn.classList.add("active");
        document.getElementById(btn.dataset.tab).classList.add("active");
    });
});