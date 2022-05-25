(() => {
  const refs = {
    openMenu: document.querySelector('[data-menu-open]'),
    closeMenu: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
  };

  refs.openMenu.addEventListener('click', toggleMenu);
  refs.closeMenu.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-rotate');
  }
})();
