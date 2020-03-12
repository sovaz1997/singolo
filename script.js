window.onload = function() {
  document.querySelector('body').classList.remove('preload');

  function makeActive(targetClass, container, target) {
    const activeClass = targetClass + '--active';

    container.forEach((el) => {
      el.classList.remove(activeClass);
    });
    
    if(target.classList.contains(targetClass)) {
      target.classList.add(activeClass);
    }
  }

  function rand(a, b) {
    return Math.floor(Math.random() * (b - a) + a);
  }

  function swapNodes(childs, a, b) {
    const parent = childs[a].parentNode;
    const replaced = parent.replaceChild(childs[b], childs[a]);
    parent.insertBefore(replaced, childs[b]);
  }

  function shuffleImages(images) {
    for(let i = images.length - 1; i >= 1; --i) {
      const newPosition = rand(0, i);
      swapNodes(images, i, newPosition);
    }
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

  function changeSliderBg(slideNumber) {
    slider.classList.toggle("slider--red", slideNumber === 0);
    slider.classList.toggle("slider--blue", slideNumber === 1);
  }

  function nextSlide() {
    let index = (sliderReset() + 1) % slides.length;
    slides[index].classList.add("slide--active");
    changeSliderBg(index);
  }

  function prevSlide() {
    let index = sliderReset() - 1;
    if(index < 0) index = slides.length - 1;
    slides[index].classList.add("slide--active");
    changeSliderBg(index);
  }

  const menu = document.querySelector('.site-header__nav');
  const menuItemClass = "site-header__nav-link";
  const menuItems = menu.querySelectorAll('.' + menuItemClass);
  
  menu.addEventListener('click', (e) => {
    makeActive(menuItemClass, menuItems, e.target);
  });

  const portfolio = document.querySelector('.portfolio__works');
  const portfolioItemClass = "portfolio__work-image";
  const portfolioImages = portfolio.querySelectorAll('.' + portfolioItemClass);

  portfolio.addEventListener("click", (e) => {
    makeActive(portfolioItemClass, portfolioImages, e.target);
  });

  const phones = document.querySelectorAll('.phone');

  phones.forEach((el) => {
    el.addEventListener("click", () => {
      el.classList.toggle("phone--off");
    });
  });


  const filter = document.querySelector('.filter');
  const filterItemClass = "filter__item";
  const filterItems = filter.querySelectorAll('.' + filterItemClass);

  filter.addEventListener("click", (e) => {
    makeActive(filterItemClass, filterItems, e.target);

    const portfolioItems = portfolio.querySelectorAll(".portfolio__work-item");
    shuffleImages(portfolioItems);
  });


  const sliderPrevButton = document.querySelector(".slider__arrow--left");
  const sliderNextButton = document.querySelector(".slider__arrow--right");


  sliderPrevButton.addEventListener("click", () => {
    prevSlide();
  });

  sliderNextButton.addEventListener("click", () => {
    nextSlide();
  });

}