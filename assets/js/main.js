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