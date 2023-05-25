/**
 * NodeList.prototype.forEach() polyfill
 * https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach#Polyfill
 */
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;
    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

// Фильтр на моб устройствах
const sidebarToggleBtn = document.querySelector(".menu-icon-wrapper");
const menuIcon = document.querySelector(".menu-icon");
const sidebar = document.querySelector(".sidebar");

// Клик по кнопке для скрытия / показа фильтра
sidebarToggleBtn.onclick = function () {
  menuIcon.classList.toggle("menu-icon-active");
  sidebar.classList.toggle("sidebar--mobile-active");
};

// Показать еще 3 карточки
const btnShowMoreCards = document.querySelector(".btn-more");
const hiddenCards = document.querySelectorAll(".card-link--hidden");

btnShowMoreCards.addEventListener("click", function () {
  hiddenCards.forEach(function (card) {
    card.classList.remove("card-link--hidden");
  });
});

// Показать/скрыть контент внутри виджетов
const widgets = document.querySelectorAll(".widget");

widgets.forEach(function (widget) {
  widget.addEventListener("click", function (e) {
    if (e.target.classList.contains("widget__title")) {
      e.target.classList.toggle("widget__title--active");
      e.target.nextElementSibling.classList.toggle("widget__body--hidden");
    }
  });
});

// Location - кнопка Любая

const checkBoxAny = document.querySelector("#location-05");
const topLocationCheckBoxes = document.querySelectorAll(
  "[data-location-param]"
);

// Выбор кнопки Любая - и отключение других чекбоксов
checkBoxAny.addEventListener("change", function () {
  if (checkBoxAny.checked) {
    topLocationCheckBoxes.forEach(function (item) {
      item.checked = false;
    });
  }
});

//отключение кнопки Любая при нажатии на другие кнопки
topLocationCheckBoxes.forEach(function (item) {
  item.addEventListener("change", function () {
    if (checkBoxAny.checked) {
      checkBoxAny.checked = false;
    }
  });
});

// Показать еще 3 доп чекбокса в фильтре
const showMoreOptions = document.querySelector(".widget__show-hidden");
const hiddenCheckBoxes = document.querySelectorAll(".checkbox--hidden");

showMoreOptions.onclick = function (e) {
  e.preventDefault();
  if (showMoreOptions.dataset.options == "hidden") {
    hiddenCheckBoxes.forEach(function (item) {
      item.style.display = "block";
    });
    showMoreOptions.innerText = "Скрыть";
    showMoreOptions.dataset.options = "visible";
  } else if (showMoreOptions.dataset.options == "visible") {
    hiddenCheckBoxes.forEach(function (item) {
      item.style.display = "none";
    });
    showMoreOptions.innerText = "Показать еще";
    showMoreOptions.dataset.options = "hidden";
  }
};
