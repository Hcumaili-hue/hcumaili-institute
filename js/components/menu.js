const menuToggle =
document.querySelector(
  '.menu-toggle'
);

const menuPanel =
document.querySelector(
  '.menu-panel'
);

if(
  menuToggle &&
  menuPanel
){

  menuToggle.addEventListener(
    'click',
    () => {

      menuPanel.classList.toggle(
        'active'
      );

    }
  );

}
