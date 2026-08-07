// Hero Section's Slider
var swiper = new Swiper('.mySwiper', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    // pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true,
    // },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});



// Product Section's Filtering
function filterProducts(category) {
    const items = document.querySelectorAll(".product-item");
    items.forEach(item => {
        if(item.classList.contains(category)){
            item.classList.remove("show");
            void item.offsetWidth;
            item.classList.add("show");
        } else{
            item.classList.remove("show");
        }
    });
}

const buttons = document.querySelectorAll(".filter-controls .btn");
buttons.forEach(btn => {
    btn.addEventListener("click", function(){
        buttons.forEach(b => b.classList.remove("active"));
        this.classList.add("active");
    });
});

filterProducts("best-sellers");



// Event Section's Filtering
function filterEvents(category) {
    const items = document.querySelectorAll(".event-items .item");
    items.forEach(item => {
        if(item.classList.contains(category)){
            item.classList.remove("show");
            void item.offsetWidth;
            item.classList.add("show");
        } else{
            item.classList.remove("show");
        }
    });
}

const buttons2 = document.querySelectorAll(".event-filter .btn");
buttons2.forEach(btn => {
    btn.addEventListener("click", function(){
        buttons2.forEach(b => b.classList.remove("active"));
        this.classList.add("active");
    });
});

filterEvents("clothings-hot");



//  Event Section's Count-down
// const endDate = new Date("2026-08-12T23:59:59").getTime();

const timer = setInterval(() => {
    const now = new Date().getTime();
    // const distance = endDate - now;
    const distance = 1786551599000 - now;
    
    if(distance <= 0) {
        clearInterval(timer);
        const countdown = document.querySelectorAll(".count-down");
        countdown.forEach(count => {
            count.innerHTML = "Event Ended";
            count.style.color = "#dc3545";
            count.style.fontWeight = "700";
            count.style.fontSize = "17px";
        });
        return;
    }

    document.querySelectorAll("#days").forEach(day => {
        day.textContent = String(Math.floor(distance/(1000*60*60*24))).padStart(2, "0");
    });
    document.querySelectorAll("#hours").forEach(hour => {
        hour.textContent = String(Math.floor((distance%(1000*60*60*24))/(1000*60*60))).padStart(2, "0");
    });
    document.querySelectorAll("#minutes").forEach(minute => {
        minute.textContent = String(Math.floor((distance%(1000*60*60))/(1000*60))).padStart(2, "0");
    });
    document.querySelectorAll("#seconds").forEach(second => {
        second.textContent = String(Math.floor((distance%(1000*60))/1000)).padStart(2, "0");
    });
}, 1000);