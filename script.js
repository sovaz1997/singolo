'use strict';

window.onload = function() {
  disableAnimationsOnLoading();
  addNavClickHandler();
  addModalHandlers();
  addPortfolioImageHandler();
  addPhonesHandler();
  addFilterHandler();
  addSliderHandler();
  addFormHandler();
}

const addNavClickHandler = () => {
  const menu = document.querySelector('.site-header__nav');
  const menuItemClass = "site-header__nav-link";
  const menuItems = menu.querySelectorAll('.' + menuItemClass);
  
  menu.addEventListener('click', (e) => {
    makeActive(menuItemClass, menuItems, e.target);
  });
}

const makeActive = (targetClass, container, target) => {
  const activeClass = targetClass + '--active';

  container.forEach((el) => {
    el.classList.remove(activeClass);
  });
  
  if(target.classList.contains(targetClass)) {
    target.classList.add(activeClass);
  }
}

const disableAnimationsOnLoading = () => {
  document.querySelector('body').classList.remove('preload');
}

const shuffleImages = (images) => {
  for(let i = images.length - 1; i >= 1; --i) {
    const newPosition = rand(0, i);
    swapNodes(images, i, newPosition);
  }
}

const swapNodes = (childs, a, b) => {
  const parent = childs[a].parentNode;
  const replaced = parent.replaceChild(childs[b], childs[a]);
  parent.insertBefore(replaced, childs[b]);
}

const slider = document.querySelector(".slider");
  const slides = slider.querySelectorAll(".slide");

  function sliderReset() {
    let index = 0;

    slides.forEach((it, ind) => {
      if(it.classList.contains("slide--active")) {
        index = ind;
        it.classList.remove("slide--active");
      }
    });

    return index;
  }

const changeSliderBg = (slideNumber) => {
  slider.classList.toggle("slider--red", slideNumber === 0);
  slider.classList.toggle("slider--blue", slideNumber === 1);
}

const nextSlide = () => {
  let index = (sliderReset() + 1) % slides.length;
  slides[index].classList.add("slide--active");
  changeSliderBg(index);
}

const prevSlide = () => {
  let index = sliderReset() - 1;
  if(index < 0) index = slides.length - 1;
  slides[index].classList.add("slide--active");
  changeSliderBg(index);
}

const rand = (a, b) => Math.floor(Math.random() * (b - a) + a);

const addField = (str, def) => {
  const res = !str.length ? def : str;
  return res + "<br>";
}

const form = document.querySelector(".form");

const modal = document.querySelector(".modal");
const modalShadow = document.querySelector(".modal__shadow");
const modalText = modal.querySelector(".modal__text");
const modalClose = modal.querySelector(".modal__close");

const inputSubject = form.querySelector("#input-subject");
const inputDetails = form.querySelector("#input-details");

const content = document.querySelector(".content");

const openModal = () => {
  modal.classList.add("modal--active");
  content.classList.add("content--modal");
}

const closeModal = () => {
  modal.classList.remove("modal--active");
  content.classList.remove("content--modal");
}

const addModalHandlers = () => {
  modalClose.addEventListener("click", () => {
    closeModal()
  });

  document.addEventListener("click", (e) => {
    if(e.target === modalShadow) {
      closeModal()
    }
  });

  document.addEventListener("keydown", (e) => {
    if(e.code === "Escape") {
      closeModal()
    }
  });
}

const setModal = () => {
  let res = "Писмо отправлено<br>";

  res += addField("Тема: " + inputSubject.value, "Без темы");
  res += addField("Описание: " + inputDetails.value, "Без описания");

  modalText.innerHTML = res;

  openModal();
}

const portfolio = document.querySelector('.portfolio__works');

const addPortfolioImageHandler = () => {
  const portfolioItemClass = "portfolio__work-image";
  const portfolioImages = portfolio.querySelectorAll('.' + portfolioItemClass);

  portfolio.addEventListener("click", (e) => {
    makeActive(portfolioItemClass, portfolioImages, e.target);
  });
}

const addFilterHandler = () => {
  const filter = document.querySelector('.filter');
  const filterItemClass = "filter__item";
  const filterItems = filter.querySelectorAll('.' + filterItemClass);

  filter.addEventListener("click", (e) => {
    makeActive(filterItemClass, filterItems, e.target);

    const portfolioItems = portfolio.querySelectorAll(".portfolio__work-item");
    shuffleImages(portfolioItems);
  });
}

const addPhonesHandler = () => {
  const phones = document.querySelectorAll('.phone');

  phones.forEach((el) => {
    el.addEventListener("click", () => {
      el.classList.toggle("phone--off");
    });
  });
}

const addSliderHandler = () => {
  const sliderPrevButton = document.querySelector(".slider__arrow--left");
  const sliderNextButton = document.querySelector(".slider__arrow--right");

  sliderPrevButton.addEventListener("click", () => {
    prevSlide();
  });

  sliderNextButton.addEventListener("click", () => {
    nextSlide();
  });
}

const addFormHandler = () => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    setModal();
  });
}