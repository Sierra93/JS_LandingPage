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
    // Таймер
    let deadLine = "2018-10-21";
    function getTimeRemaining(endTime) {
        // Взяли дату дедлайна и отняли от текущей даты
        let t = Date.parse(endTime) - Date.parse(new Date()),   // t - кол-во милисекунд
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / (1000 * 60 * 60))); 
        return {
            'total': t,
            'hourse': hours,
            'minutes': minutes,
            'second': seconds
        };
    }
    // Выставляет и запускает часы
    function setClock(id, endTime) {
        let timer = document.getElementById(id),
            hourse = timer.querySelector(".hourse"),
            minutes = timer.querySelector(".minutes"),
            seconds = timer.querySelector(".seconds"),
            timeInterval = setInterval(updateClock, 1000);
    }    
    // Вызывается каждую секунду
    function updateClock(endTime) {
        let t = getTimeRemaining(endTime);
        hourse.textContent = t.hourse;  // Каждую секунду получает кол-во часов
        minutes.textContent = t.minutes;
        second.textContent = t.second;
        if (t.total < 0) {
            clearInterval(timeInterval);
        }
    }
    setClock('timer', deadLine);
    // Диалоговое окно
    let more = document.querySelector(".more"),
        overlay = document.querySelector(".overlay"),
        close = document.querySelector(".popup-close");
    more.addEventListener("click", function () {
        overlay.style.display = 'block';
        this.classList.add("more-splash");
    });
    // Закрывает диалог
    close.addEventListener("click", function () {
        overlay.style.display = 'none';
        more.classList.remove(".more-splash");
    });
};