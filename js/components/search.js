const searchToggle =
document.querySelector('.search-toggle');

const searchPanel =
document.querySelector('.search-panel');

const searchClose =
document.querySelector('.search-close');


searchToggle.addEventListener(
'click',
() => {

  searchPanel.classList.add(
    'active'
  );

});


searchClose.addEventListener(
'click',
() => {

  searchPanel.classList.remove(
    'active'
  );

});
