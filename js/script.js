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

const inputs = document.querySelectorAll(".period__input");

inputs.forEach(input => {
  const datepickerInstance = new Datepicker(input, {
    autohide: true,
    format: "dd.mm.yyyy",
    language: "ru",
    todayHighlight: true,
    minDate: new Date(),
    monthsShown: 2,
  });

  const icon = input.parentElement.querySelector(".period__input-icon");

  if (icon) {
    const toggleIconVisibility = () => {
      icon.style.visibility = input.value.trim() !== "" ? "visible" : "hidden";
    };

    input.addEventListener("input", toggleIconVisibility);

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
