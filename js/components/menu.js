const menuToggle =
document.querySelector(
  ".menu-toggle"
);

const menuPanel =
document.querySelector(
  ".menu-panel"
);

if(
  menuToggle &&
  menuPanel
){

  /* OPEN / CLOSE */

  menuToggle.addEventListener(
    "click",
    () => {

      menuPanel.classList.toggle(
        "active"
      );

    }
  );

  /* CLOSE OUTSIDE */

  document.addEventListener(
    "click",
    (event) => {

      const clickInside =
        menuPanel.contains(event.target)
        ||
        menuToggle.contains(event.target);

      if(
        !clickInside
      ){

        menuPanel.classList.remove(
          "active"
        );

      }

    }
  );

}
