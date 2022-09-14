const filtering = document.querySelector('.filters');
const partnersDirectory = document.querySelector('.quality-partners-directory');

// JSON Data
const { partnersconfig, filters, restaurants, hotels, entertainment } = data;

// Config
const { number_partners: nbrPartners, number_posts: nbrPosts } = partnersconfig;

// Filters
let allFilters = '';
let filterNames = [];

filters.forEach(function (filter) {
  const { type, view, name, title, thumb } = filter;
  let filterlist = '';

  if (view !== false) {
    filterlist = `
      <div class="filter filter-${type} outline" style="background-image: url('${thumb.src ? thumb.src : thumb.placeholder}');">
        <button type="button" data-filter=".${type}" data-title="${title}">${name}</button>
      </div>
    `;
    filterNames.push(type);
  }
  allFilters += filterlist;
});
filtering.innerHTML = allFilters;

const filterButtons = document.querySelectorAll(`[data-filter]`);

filterButtons.forEach(function (filterButton) {
  filterButton.addEventListener('click', function(e) {
    let currentActive = e.currentTarget;
    removeActive(currentActive);
    const filterValue = filterButton.dataset.filter.substring(1);
    const filterButtonTitle = filterButton.dataset.title;
    sortSelection(filterValue, filterButtonTitle);
  });
});

// Add Filter Active Class
function removeActive(currentActive) {
  filterButtons.forEach(function (filterButton) {
    if (filterButton !== currentActive) {
      filterButton.classList.remove('is-active');
    }
    return currentActive.classList.add('is-active');
  });
}

// Compare/Get Data
function compare(filterValue) {
  switch (filterValue) {
    case 'restaurant':
      return restaurants;
    case 'hotel':
      return hotels;
    case 'entertainment':
      return entertainment;
  }
}

// Iterate List Items
function listItem(inventory) {
  let inventoryList = '';

  for (let i = 0; i < inventory.length; i++) {
    inventoryList += `<li><a href="${inventory[i].url}" target="_blank">${inventory[i].model}</a></li>`;
  }
  return inventoryList;
}

// Create Two Lists
function sortSelection(filterValue, filterButtonTitle) {
  const currentFilterValues = compare(filterValue);
  let  partnersList = [];

  // Sort Partners
  currentFilterValues.forEach(function (currentFilterValue) {
    const { partners, view } = currentFilterValue;
    
    if (partners && view) {
      partnersList.push(currentFilterValue);
    }
  });
  const newPartnersList = [...partnersList.slice(0, nbrPartners)];

  let otherPosts = [];

  // Sort Remaining Posts
  currentFilterValues.forEach(function (remainingList) {
    const { partners, view } = remainingList;
    
    if (!partners && view) {
      otherPosts.push(remainingList);
    }
  });
  const newOtherPosts = [...otherPosts.slice(0, nbrPosts)];

  displayPosts(newPartnersList, newOtherPosts, filterButtonTitle)
}

// Display
function displayPosts(cardPartners, cards, filterButtonTitle) {
  const sectionTitle = `
    <h2 class="section__title">${filterButtonTitle}</h2>
  `;

  let partnersTemplate = '';

  cardPartners.forEach(function (cardPartner) {
    const { id, type, title, description, address, daily, daily_text: txtDaily, cta, cta_link, feature, machine, inventory } = cardPartner;

    partnersTemplate += `
      <article data-id="${id}" data-type="${type}" class="card card-partner">
        <a href="${cta_link}" target="_blank" class="card__img" style="background-image: url('${feature.src ? feature.src : feature.placeholder}');"></a>
        <div class="card__content">
          <h3 class="card__title">${title}</h3>
          <h4 class="card__subtitle">${address}</h4>
          <div class="card__description">
            <p>${description}</p>
          </div>
          <div class="grid-list">
            <div>
              <h5 class="list__title icon-daily">${daily}</h5>
              <ul>
                <li>${txtDaily}</li>
              </ul>
            </div>
            <div>
              <h5 class="list__title">${machine}</h5>
              <ul>${listItem(inventory)}</ul>
            </div>
          </div>
          <a href="${cta_link}" target="_blank" class="card__button">${cta}</a>
        </div>
      </article>
    `;
  });

  let postsTemplate = '';

  cards.forEach(function (card) {
    const { id, type, thumb, title, address, daily_number: nbrDaily, cta_link, machine, inventory } = card;
    
    postsTemplate += `
      <article data-id="${id}" data-type="${type}" class="card zoom">
        <a href="${cta_link}" target="_blank" class="card__img">
          <img src="${thumb.src ? thumb.src : image.placeholder}" alt="${thumb.alt}" width="280" height="280">
        </a>
        <div class="card__content">
          <h3 class="card__title">${title}</h3>
          <div class="card__address">
            <p>${address}</p>
          </div>
          <h4 class="list__title">${machine}</h4>
          <ul>${listItem(inventory)}</ul>
          <span class="icon-daily">${nbrDaily}</span>
        </div>
      </article>
    `;
  });

  const pageTemplate = `
    <div class="container animated is-fadeIn">
      <div class="section__content">${sectionTitle}</div>
      <div class="quality-partners-feature">${partnersTemplate}</div>
    </div>
    <div class="quality-partners-posts">
      <div class="container">
        <div class="grid-three">${postsTemplate}</div>
      </div>
    </div>
  `;
  setTimeout( function() {
    partnersDirectory.innerHTML = pageTemplate;
  }, 100);
}