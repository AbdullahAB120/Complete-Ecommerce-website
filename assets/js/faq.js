// FAQ Page's
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
    item.querySelector(".faq-question").addEventListener("click", () => {
        if(item.classList.contains("active")) {
            item.classList.remove("active");
            item.querySelector("i").classList.replace("fa-minus","fa-plus");
        } else{
            faqItems.forEach(faq => {
                faq.classList.remove("active");
                faq.querySelector("i").classList.replace("fa-minus","fa-plus");
            });
            item.classList.add("active");
            item.querySelector("i").classList.replace("fa-plus","fa-minus");
        }
    });
});