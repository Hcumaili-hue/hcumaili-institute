const searchToggle =
document.querySelector(
  '.search-toggle'
);

const searchInput =
document.querySelector(
  '.search-input'
);


if(
  searchToggle &&
  searchInput
){

  searchToggle.addEventListener(
    'click',
    () => {

      searchInput.focus();

    }
  );

}
