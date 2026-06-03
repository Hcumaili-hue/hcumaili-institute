const searchInput =
document.querySelector(
  '.search-input'
);

const searchResults =
document.querySelector(
  '.search-results'
);

if(
  searchInput &&
  searchResults
){

  searchInput.addEventListener(
    'input',
    () => {

      const query =
      searchInput.value
      .toLowerCase()
      .trim();

      searchResults.innerHTML = '';

      if(!query){

        return;
      }

      const results =
      searchIndex.filter(
        item =>
          item.title
          .toLowerCase()
          .includes(query)

          ||

          item.keywords.some(
            keyword =>
            keyword
            .toLowerCase()
            .includes(query)
          )
      );

      results.forEach(
        item => {

          const link =
          document.createElement(
            'a'
          );

          link.className =
          'search-result-item';

          link.href =
          item.url;

          link.innerHTML =

          `
          <strong>
            ${item.title}
          </strong>

          <small>
            ${item.category}
          </small>
          `;

          searchResults.appendChild(
            link
          );

        }
      );

    }
  );

}
