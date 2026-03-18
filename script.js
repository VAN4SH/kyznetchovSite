// Простые анимации для сайта RoyalAvenue

// 1. Появление блоков при прокрутке страницы
function showOnScroll() {
  var blocks = document.querySelectorAll(".fade-in");
  var windowHeight = window.innerHeight;

  for (var i = 0; i < blocks.length; i++) {
    var block = blocks[i];
    var blockTop = block.getBoundingClientRect().top;

    // Если блок уже виден на экране — показываем его
    if (blockTop < windowHeight - 80) {
      block.classList.add("visible");
    }
  }
}

// Запускаем при загрузке и при прокрутке
window.addEventListener("load", showOnScroll);
window.addEventListener("scroll", showOnScroll);

// 2. Плавное появление карточек часов по очереди (небольшая задержка)
function animateWatchCards() {
  var cards = document.querySelectorAll(".watch-card.fade-in");
  for (var i = 0; i < cards.length; i++) {
    (function (index) {
      setTimeout(function () {
        if (cards[index].getBoundingClientRect().top < window.innerHeight) {
          cards[index].classList.add("visible");
        }
      }, index * 100);
    })(i);
  }
}

window.addEventListener("scroll", animateWatchCards);
window.addEventListener("load", animateWatchCards);

// 3. Лёгкая анимация при наведении на кнопку (дополнение к CSS)
var buttons = document.querySelectorAll(".btn");
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("mouseenter", function () {
    this.style.transform = "scale(1.05)";
  });
  buttons[i].addEventListener("mouseleave", function () {
    this.style.transform = "scale(1)";
  });
}
