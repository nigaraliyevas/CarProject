let lgLayoutSlider = tns({
  container: ".lg-layout .detail-slider",
  items: 5,
  axis: "vertical",
  swipeAngle: false,
  speed: 400,
  mouseDrag: true,
});
if (window.innerWidth <= 480) {
  const slider = tns({
    container: ".sm-layout .detail-slider",
    items: 5,
    slideBy: "page",
    autoplay: true,
    autoplayButtonOutput: false,

    controls: false,
    speed: 400,
    loop: true,
    gutter: 10,
  });
}

const Datepicker = window.Datepicker;
Datepicker.locales.ru = {
  days: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
  daysShort: ["Вос", "Пон", "Вто", "Сре", "Чет", "Пят", "Суб"],
  daysMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
  months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
  monthsShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
  today: "Сегодня",
  clear: "Очистить",
  format: "dd.mm.yyyy",
  weekStart: 1, // Start the week on Monday
};

// const inputs = document.querySelectorAll(".period__input");

// inputs.forEach(input => {
//   const datepickerInstance = new Datepicker(input, {
//     autohide: true,
//     format: "dd.mm.yyyy",
//     language: "ru",
//     todayHighlight: true,
//     minDate: new Date(),
//     monthsShown: 2,
//   });

//   const icon = input.parentElement.querySelector(".period__input-icon");

//   if (icon) {
//     const toggleIconVisibility = () => {
//       icon.style.visibility = input.value.trim() !== "" ? "visible" : "hidden";
//     };

//     input.addEventListener("input", toggleIconVisibility);

//     icon.addEventListener("click", () => {
//       input.value = "";
//       icon.style.visibility = "hidden";
//     });

//     toggleIconVisibility();
//   }
// });

const inputs = document.querySelectorAll(".period__input");

inputs.forEach(input => {
  const datepickerInstance = new Datepicker(input, {
    autohide: true,
    format: "dd.mm.yyyy",
    language: "ru",
    todayHighlight: true,
    minDate: new Date(),
    monthsShown: 2, // Ensure two months are shown
  });

  const icon = input.parentElement.querySelector(".period__input-icon");

  if (icon) {
    const toggleIconVisibility = () => {
      icon.style.visibility = input.value.trim() !== "" ? "visible" : "hidden";
      console.log(input.value);
    };

    input.addEventListener("focus", () => {
      toggleIconVisibility();
    });
    input.addEventListener("active", () => {
      toggleIconVisibility();
    });

    input.addEventListener("blur", () => {
      toggleIconVisibility();
    });

    input.addEventListener("input", toggleIconVisibility);

    input.addEventListener("changeDate", () => {
      toggleIconVisibility();
    });
    icon.addEventListener("click", () => {
      input.value = "";
      icon.style.visibility = "hidden";
    });

    toggleIconVisibility();
  }
});

const sliderImages = document.querySelectorAll(".detail-slider__item-img");

const detailInfoImage = document.querySelectorAll(".detail-info__img");

sliderImages.forEach(img => {
  img.addEventListener("click", () => {
    detailInfoImage.forEach(mainImage => {
      mainImage.src = img.src;
    });
    console.log(detailInfoImage);
    sliderImages.forEach(img => img.classList.remove("detail-slider__item-img--active"));
    img.classList.add("detail-slider__item-img--active");
  });
});

const prevBtn = document.querySelector(".prev-btn");
prevBtn.innerHTML = "";
const leftArrow = document.createElement("img");
leftArrow.src = "../img/icons/chevron-left.png";
prevBtn.appendChild(leftArrow);

const nextBtn = document.querySelector(".next-btn");
nextBtn.innerHTML = "";
const rightArrow = document.createElement("img");
rightArrow.src = "../img/icons/chevron-right.png";
nextBtn.appendChild(rightArrow);

theDayBefore = document.querySelector(".today").previousSibling;
theDayBefore.style.backgroundColor = "#3563E9";
theDayBefore.style.color = "#FFFFFF";

theDayAfter = document.querySelector(".today").nextElementSibling;
theDayAfter.style.backgroundColor = "#3563E9";
theDayAfter.style.color = "#FFFFFF";
