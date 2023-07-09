"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const askButton = document.querySelector(".footer_ask");
    askButton.addEventListener("click", () => {
        document.querySelector(".ask_img").classList.toggle("img_active");
        document.querySelector(".ask_text").classList.toggle("text_active");
        document.querySelector(".chat").classList.toggle("active");
    });

    const hamburger = document.querySelector(".hamburger");
    const navList = document.querySelector(".nav_list");

    hamburger.addEventListener("click", function () {
        navList.classList.toggle("active");
    });

    document.addEventListener("click", function (event) {
        const targetElement = event.target;
        if (!targetElement.closest(".hamburger") && !targetElement.closest(".nav_list ")) {
            navList.classList.remove("active");
        }
    });
});