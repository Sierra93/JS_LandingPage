// Скрипт после загрузки страницы
window.onload = function () {
    'use strict';
    let tab = document.querySelectorAll(".info-header-tab"),
        info = document.querySelector(".info-header"),
        tabContent = document.querySelectorAll(".info-tab-content");

    // Скрываем весь контент кроме первого так как в функцию передаем 1
    function hideTabContent(a) {
        for (let i = 0; i < tabContent; i++) {
            // Скроем контент
            tabContent[i].classList.remove("show");
            tabContent[i].classList.add("hide");
        }
    }
    hideTabContent(1); // Скроется все табы кроме первого

    // Показываем определенный контент
    function showTabContent(b) {
        if (tabContent[b].classList.contains("hide")) {
            tabContent[b].classList.remove("hide");
            tabContent[b].classList.add("show");
        }
    }

    info.addEventListener("click", function (event) {
        let target = event.target;  // То куда нажали
        if (target && target.classList.contains("info-header-tab")) {
            for (let i = 0; i < tab.length; i++) {
                // Если то куда нажали совпадает с табом
                if (target === tab[i]) {
                    hideTabContent(0);  // Скрыли все табы
                    showTabContent(i);  // Показываем нужный таб 
                    break;
                }
            }
        }
    });
};