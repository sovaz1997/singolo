window.onload = function() {
  const menu = document.querySelector(".site-header__nav");
  const menuItems = menu.querySelectorAll(".site-header__nav-link");
  
  const activeLink = "site-header__nav-link--active";

  menu.addEventListener("click", (e) => {
    menuItems.forEach((el) => {
      el.classList.remove(activeLink);
    });

    //this.alert(e.target);
    e.target.classList.add(activeLink);

  });
}