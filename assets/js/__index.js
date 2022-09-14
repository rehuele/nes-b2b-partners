import _ from './lodash.js';
import data from './partners.json';
import mixitup from './mixitup.js';

const filtering = document.querySelector('.filters');
const posts = document.querySelector('.posts');
posts.classList.add('grid-three');
const partnerContainer = document.createElement('div');
partnerContainer.classList.add('partners');

const { config, filters, restaurant, hotel, entertainment } = data;
const { feature_partners: feature, number_partners: nbrPartners, number_posts: nbrPosts } = config;
let allFilters = '';
let filterNames = [];

filters.forEach(function (filter) {
  const { type, view, name, thumb } = filter;
  let filterlist = '';

  if (view !== false) {
    filterlist = `
      <div class="filter filter-${type} outline" style="background-image: url('${thumb.src ? thumb.src : thumb.placeholder}');">
        <button type="button" data-filter=".${type}" data-type="${type}">${name}</button>
      </div>
    `;
    filterNames.push(type);
  }
  allFilters += filterlist;
});
filtering.innerHTML = allFilters;

const partnerFilters = document.querySelectorAll('.filter');
let currentFilter = '';
let block = {};
let sweet = _.cloneDeep(data);

partnerFilters.forEach(function (partnerFilter){
  partnerFilter.addEventListener('click', function(e) {
    // console.log(filterNames);
    // console.log(e.currentTarget.className);
    // console.log(e.currentTarget);

    // const button = e.currentTarget.querySelector(`[data-filter]`);
    // currentFilter = button.dataset.filter.substring(1);
    
    const buttonDataType = e.currentTarget.querySelector(`[data-type]`);
    currentFilter = buttonDataType.dataset.type;
    // console.log({currentFilter});
    
    const buttonClass = e.currentTarget.querySelector('button').className;
    const activeClass = 'mixitup-control-active';

    // if (filterNames.includes(currentFilter) && (buttonClass === activeClass)) {
    if (filterNames.includes(currentFilter)) {

      const james = currentData(currentFilter);


      // let card = data.find(function (info) {
      //   return info === currentFilter;
      // });

      // console.log(Object.keys(data));

      // for (let i = 0; i < Object.keys(data).length; i++) {
      //   if (Object.keys(data)[i] == currentFilter) {
      //     block = _.cloneDeep([Object.keys(data)[i]]);
      //     // console.log(block);
      //   }
      // }
      // console.log(currentFilter);
      filterPartners(james);
    }
  });
})

function currentData(expr) {
  switch (expr) {
    case 'restaurant':
      return restaurant;
    case 'hotel':
      return hotel;
    case 'entertainment':
      return entertainment;
  }
}

// const combinedPosts = restaurants.concat(hotels, entertainment);

// filterPartners(combinedPosts);
// filterPosts(combinedPosts);

function filterPartners(currentPosts) {
  // const newCombinedPosts = [...combinedPosts.slice(0, nbrPartners)];
  // console.log(typeof restaurant);
  console.log(currentPosts);
  console.log('coming from inside');
  // console.log(restaurant);
  let newPartnerPosts = [];
   
  // currentPosts.forEach(function (currentPost) {
  //   const { type, partners, view } = currentPost;
    
  //   if ((!partners) && (!view)) {
  //     newPartnerPosts.push(combinedPost);
  //   }

  // });
  // displayPartners(newPartnerPosts);
}

function displayPartners(associates) {
  const sectionContainer = document.createElement('div');
  sectionContainer.classList.add('section__content');
  const sectionTitle = `
    <h2 class="section__title">${feature} Partners</h2>
  `;
  sectionContainer.innerHTML = sectionTitle;

  let partnersTemplate = '';

  associates.forEach(function (associate) {
    const { id, type, title, subtitle, description, daily, daily_text: txtDaily, cta, cta_link, thumb, machine, inventory } = associate;

    partnersTemplate += `
      <div data-id="${id}" data-type="${type}" class="card card-partner">
        <a href="${cta_link}" target="_blank" class="card__img" style="background-image: url('${thumb.src ? thumb.src : thumb.placeholder}');"></a>
        <div class="card__content">
          <h3 class="card__title">${title}</h3>
          <h4 class="card__subtitle">${subtitle}</h4>
          <p class="card__description">${description}</p>
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
      </div>
    `;
  });
  partnerContainer.innerHTML = partnersTemplate;
  filtering.after(partnerContainer);
  filtering.after(sectionContainer);
}

function listItem(inventory) {
  let inventoryList = '';

  for (let i = 0; i < inventory.length; i++) {
    inventoryList += `<li><a href="${inventory[i].url}" target="_blank">${inventory[i].model}</a></li>`;
  }
  return inventoryList;
}

function filterPosts(combinedPosts) {
  let newPosts = [];
   
  combinedPosts.forEach(function (combinedPost) {
    const { id, type, partners, view } = combinedPost;

    if (filterNames.includes(type)) {
    
      if (partners !== true && view !== false) {
        newPosts.push(combinedPost);
      }
    }

  });
  const newCombinedPosts = [...newPosts.slice(0, nbrPosts)];
  displayPosts(newCombinedPosts);
}

function displayPosts(cards) {
  let postsTemplate = '';

  cards.forEach(function (card) {
    const { id, type, thumb, title, description, daily_number: nbrDaily, cta_link, machine, inventory } = card;
    
    postsTemplate += `
      <div data-id="${id}" data-type="${type}" class="card mix ${type}">
        <a href="${cta_link}" target="_blank" class="card__img">
          <img src="${thumb.src ? thumb.src : image.placeholder}" alt="${thumb.alt}">
        </a>
        <div class="card__content">
          <h3 class="card__title">${title}</h3>
          <p class="card__description">${description}</p>
          <h4 class="list__title">${machine}</h4>
          <ul>${listItem(inventory)}</ul>
          <span class="icon-daily">${nbrDaily}</span>
        </div>
      </div>
    `;
  });
  posts.innerHTML = postsTemplate;
}

let mixer = mixitup(posts, {
  "animation": {
    "duration": 250,
    "nudge": true,
    "reverseOut": false,
    "effects": "fade scale(0.01) translateX(20%) translateY(20%) stagger(73ms)"
  }
});