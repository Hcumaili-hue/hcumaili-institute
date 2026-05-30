const menuToggle =
document.querySelector(
  '.menu-toggle'
);

const sideMenu =
document.querySelector(
  '.side-menu'
);

if(
  menuToggle &&
  sideMenu
){

  menuToggle.addEventListener(
    'click',
    () => {

      sideMenu.classList.toggle(
        'active'
      );

    }
  );

}
