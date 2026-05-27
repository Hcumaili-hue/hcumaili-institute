const searchInput =
document.querySelector(
  '.search-input'
);

const searchResults =
document.querySelector(
  '.search-results'
);


/* =========================
SEARCHABLE SECTIONS
========================= */

const searchableItems = [

  {
    title:'Mission',
    element:
    document.querySelector(
      '#mission'
    )
  },

  {
    title:'Researcher',
    element:
    document.querySelector(
      '#researcher'
    )
  },

  {
    title:'Methodology',
    element:
    document.querySelector(
      '#methodology'
    )
  },

  {
    title:'Publications',
    element:
    document.querySelector(
      '#publication'
    )
  },

  {
    title:'Libraries',
    element:
    document.querySelector(
      '#libraries'
    )
  },

  {
    title:'Research',
    element:
    document.querySelector(
      '#current-research'
    )
  }

];


/* =========================
LIVE SEARCH
========================= */

searchInput.addEventListener(
  'input',
  () => {

    const query =
    searchInput.value
    .toLowerCase()
    .trim();

    searchResults.innerHTML =
    '';

    if(!query){

      return;
    }

    searchableItems.forEach(
      item => {

        const text =
        item.element
        ?.innerText
        .toLowerCase();

        if(
          text &&
          text.includes(query)
        ){

          const button =
          document.createElement(
            'button'
          );

          button.className =
          'search-result-item';

          button.textContent =
          item.title;

          button.addEventListener(
            'click',
            () => {

              item.element
              .scrollIntoView({

                behavior:
                'smooth'

              });

            }
          );

          searchResults
          .appendChild(
            button
          );

        }

      }
    );

  }
);
