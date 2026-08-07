//  Shop Page's Sorting
const sortCurrent = document.querySelector(".sort-item");
const sortOptions = document.querySelectorAll(".sort-dropdown-menu a");

function updateSortMenu(selected) {
    sortCurrent.textContent = selected;
    sortOptions.forEach(item => {
        if(item.dataset.value == selected) {
            item.parentElement.style.display = "none";
        } else {
            item.parentElement.style.display = "block";
        }
    });
}

updateSortMenu("Most Relevant");

sortOptions.forEach(item => {
    item.addEventListener("click", function(e) {
        e.preventDefault();
        updateSortMenu(this.dataset.value);
    });
});



// Shop Page's Filter Accordian
const title = document.querySelectorAll(".filter-item-title");
const content = document.querySelectorAll(".filter-item-content");

title.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("active");
        item.nextElementSibling.classList.toggle("show");
    });
})