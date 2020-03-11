window.onload = function() {
  function makeActive(targetClass, container, target) {
    const activeClass = targetClass + '--active';
    container.forEach((el) => {
      el.classList.remove(activeClass);
    });
    
    if(target.classList.contains(targetClass)) {
      target.classList.add(activeClass);
    }
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
}