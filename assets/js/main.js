// Header Top Section's Dropdown Menu
const current = document.querySelector(".currency");
const options = document.querySelectorAll(".dropdown-menu a");

function updateMenu(selected) {
    current.textContent = selected;
    options.forEach(item => {
        if(item.dataset.value == selected) {
            item.parentElement.style.display = "none";
        } else {
            item.parentElement.style.display = "block";
        }
    });
}

updateMenu("USD");

options.forEach(item => {
    item.addEventListener("click", function(e) {
        e.preventDefault();
        updateMenu(this.dataset.value);
    });
});



// Header Section's Toggle Menu
const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
const mobileMenuToggleIcon = document.querySelector(".toggle-icon");

mobileMenuToggle.addEventListener("click", e => {
	mobileMenu.classList.toggle("active");
	
	if(mobileMenu.classList[1] === "active") {
		document.body.style.overflow = "hidden";
		mobileMenuToggleIcon.setAttribute("name", "close-outline");
	} else {
		document.body.style.overflow = "auto";
		mobileMenuToggleIcon.setAttribute("name", "menu-outline");
	}
});



// Mobile Menu Top Section's Dropdown Menu
const currentMobile = document.querySelector(".mobile-currency");
const optionsMobile = document.querySelectorAll(".mobile-dropdown-menu a");

function updateMobileMenu(selected) {
    currentMobile.textContent = selected;
    optionsMobile.forEach(item => {
        if(item.dataset.value == selected) {
            item.parentElement.style.display = "none";
        } else {
            item.parentElement.style.display = "block";
        }
    });
}

updateMobileMenu("USD");

optionsMobile.forEach(item => {
    item.addEventListener("click", function(e) {
        e.preventDefault();
        updateMobileMenu(this.dataset.value);
    });
});



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