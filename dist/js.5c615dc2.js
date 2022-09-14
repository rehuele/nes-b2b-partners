// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"assets/js/partners.json":[function(require,module,exports) {
module.exports = {
  "partnersconfig": {
    "number_partners": 4,
    "number_posts": 7
  },
  "filters": [{
    "view": true,
    "type": "restaurant",
    "name": "Restaurants",
    "title": "Restaurant Partners",
    "thumb": {
      "src": "filter-restaurant.jpg",
      "placeholder": "450x253.png",
      "alt": "thumb restaurants"
    }
  }, {
    "view": true,
    "type": "hotel",
    "name": "Hotels",
    "title": "Hotel Partners",
    "thumb": {
      "src": "filter-hotel.jpg",
      "placeholder": "450x253.png",
      "alt": "thumb hotels"
    }
  }, {
    "view": false,
    "type": "business",
    "name": "Business",
    "title": "Business Partners",
    "thumb": {
      "src": "450x253.png",
      "placeholder": "450x253.png",
      "alt": "thumb business"
    }
  }, {
    "view": false,
    "type": "entertainment",
    "name": "Entertainment",
    "title": "Entertainment Partners",
    "thumb": {
      "src": "450x253.png",
      "placeholder": "450x253.png",
      "alt": "thumb entertainment"
    }
  }],
  "restaurants": [{
    "id": 1,
    "type": "restaurant",
    "partners": true,
    "view": true,
    "title": "Restaurant Robert's Pizza",
    "subtitle": "Québec (5 locations)",
    "description": "Cette boulangerie phare de la capitale nationale met de l'avant le savoir-faire à la français dans ses quatre succursales. Grâce à Nespresso, elle s'assure que ses cafés soient du même niveau de qualité et de régularité que ses pains et viennoiseries.",
    "address": "2505 Cohen St, St-Laurent, QC H4R 2N5",
    "daily": "Nb. of Coffees Daily",
    "daily_text": "150 (per location)",
    "daily_number": 99,
    "cta": "Visit Site",
    "cta_link": "https://www.restaurant-toque.com/en",
    "thumb": {
      "src": "square-thumb-1.jpg",
      "placeholder": "280x280.png",
      "alt": "thumb restaurant"
    },
    "feature": {
      "src": "paillard.jpg",
      "placeholder": "1095x616.png",
      "alt": "feature restaurant"
    },
    "machine": "Machines Used",
    "inventory": [{
      "model": "Aguila 440",
      "url": "https://www.nespresso.com/ca/en/order/machines/original/essenza-plus-nespresso-d-red"
    }, {
      "model": "Ezena Plus",
      "url": "https://www.nespresso.com/ca/en/order/machines/original/essenza-mini-metal-coffee-machine"
    }]
  }, {
    "id": 2,
    "type": "restaurant",
    "partners": true,
    "view": true,
    "title": "Restaurant Paillard",
    "subtitle": "Québec (5 locations)",
    "description": "Cette boulangerie phare de la capitale nationale met de l'avant le savoir-faire à la français dans ses quatre succursales. Grâce à Nespresso, elle s'assure que ses cafés soient du même niveau de qualité et de régularité que ses pains et viennoiseries.",
    "address": "2505 Cohen St, St-Laurent, QC H4R 2N5",
    "daily": "Nb. of Coffees Daily",
    "daily_text": "150 (per location)",
    "daily_number": 99,
    "cta": "Visit Site",
    "cta_link": "https://www.restaurant-toque.com/en",
    "thumb": {
      "src": "",
      "placeholder": "280x280.png",
      "alt": "thumb restaurant"
    },
    "feature": {
      "src": "",
      "placeholder": "1095x616.png",
      "alt": "feature restaurant"
    },
    "machine": "Machines Used",
    "inventory": [{
      "model": "Aguila 440",
      "url": "https://www.nespresso.com/ca/en/order/machines/original/essenza-plus-nespresso-d-red"
    }, {
      "model": "Ezena Plus",
      "url": "https://www.nespresso.com/ca/en/order/machines/original/essenza-mini-metal-coffee-machine"
    }]
  }, {
    "id": 3,
    "type": "restaurant",
    "partners": false,
    "view": true,
    "title": "Restaurant Paillard",
    "subtitle": "Québec (5 locations)",
    "description": "Cette boulangerie phare de la capitale nationale met de l'avant le savoir-faire à la français dans ses quatre succursales. Grâce à Nespresso, elle s'assure que ses cafés soient du même niveau de qualité et de régularité que ses pains et viennoiseries.",
    "address": "2505 Cohen St, St-Laurent, QC H4R 2N5",
    "daily": "Nb. of Coffees Daily",
    "daily_text": "150 (per location)",
    "daily_number": 99,
    "cta": "Visit Site",
    "cta_link": "https://www.restaurant-toque.com/en",
    "thumb": {
      "src": "square-thumb-3.jpg",
      "placeholder": "280x280.png",
      "alt": "thumb restaurant"
    },
    "feature": {
      "src": "rectangle-thumb-3.jpg",
      "placeholder": "1095x616.png",
      "alt": "feature restaurant"
    },
    "machine": "Machines Used",
    "inventory": [{
      "model": "Aguila 440",
      "url": "https://www.nespresso.com/ca/en/order/machines/original/essenza-plus-nespresso-d-red"
    }, {
      "model": "Ezena Plus",
      "url": "https://www.nespresso.com/ca/en/order/machines/original/essenza-mini-metal-coffee-machine"
    }]
  }, {
    "id": 4,
    "type": "restaurant",
    "partners": true,
    "view": true,
    "title": "Restaurant Paillard",
    "subtitle": "Québec (5 locations)",
    "description": "Cette boulangerie phare de la capitale nationale met de l'avant le savoir-faire à la français dans ses quatre succursales. Grâce à Nespresso, elle s'assure que ses cafés soient du même niveau de qualité et de régularité que ses pains et viennoiseries.",
    "address": "2505 Cohen St, St-Laurent, QC H4R 2N5",
    "daily": "Nb. of Coffees Daily",
    "daily_text": "150 (per location)",
    "daily_number": 99,
    "cta": "Visit Site",
    "cta_link": "https://www.restaurant-toque.com/en",
    "thumb": {
      "src": "square-thumb-4.jpg",
      "placeholder": "280x280.png",
      "alt": "thumb restaurant"
    },
    "feature": {
      "src": "rectangle-thumb-4.jpg",
      "placeholder": "1095x616.png",
      "alt": "feature restaurant"
    },
    "machine": "Machines Used",
    "inventory": [{
      "model": "Aguila 440",
      "url": "https://www.nespresso.com/ca/en/order/machines/original/essenza-plus-nespresso-d-red"
    }, {
      "model": "Ezena Plus",
      "url": "https://www.nespresso.com/ca/en/order/machines/original/essenza-mini-metal-coffee-machine"
    }]
  }],
  "hotels": [{
    "id": 1,
    "type": "hotel",
    "partners": true,
    "view": true,
    "title": "Hotel Robert's Pizza",
    "subtitle": "Québec (5 locations)",
    "description": "Cette boulangerie phare de la capitale nationale met de l'avant le savoir-faire à la français dans ses quatre succursales. Grâce à Nespresso, elle s'assure que ses cafés soient du même niveau de qualité et de régularité que ses pains et viennoiseries.",
    "address": "2505 Cohen St, St-Laurent, QC H4R 2N5",
    "daily": "Nb. of Coffees Daily",
    "daily_text": "150 (per location)",
    "daily_number": 99,
    "cta": "Visit Site",
    "cta_link": "https://hotelwilliamgray.com/rooms/",
    "thumb": {
      "src": "square-thumb-1.jpg",
      "placeholder": "280x280.png",
      "alt": "thumb hotel"
    },
    "feature": {
      "src": "rectangle-thumb-1.jpg",
      "placeholder": "1095x616.png",
      "alt": "feature hotel"
    },
    "machine": "Machines Used",
    "inventory": [{
      "model": "Aguila 440",
      "url": "https://www.nespresso.com/ca/en/order/machines/original/essenza-plus-nespresso-d-red"
    }, {
      "model": "Ezena Plus",
      "url": "https://www.nespresso.com/ca/en/order/machines/original/essenza-mini-metal-coffee-machine"
    }]
  }, {
    "id": 2,
    "type": "hotel",
    "partners": false,
    "view": true,
    "title": "Hotel Paillard",
    "subtitle": "Québec (5 locations)",
    "description": "Cette boulangerie phare de la capitale nationale met de l'avant le savoir-faire à la français dans ses quatre succursales. Grâce à Nespresso, elle s'assure que ses cafés soient du même niveau de qualité et de régularité que ses pains et viennoiseries.",
    "address": "2505 Cohen St, St-Laurent, QC H4R 2N5",
    "daily": "Nb. of Coffees Daily",
    "daily_text": "150 (per location)",
    "daily_number": 99,
    "cta": "Visit Site",
    "cta_link": "https://hotelwilliamgray.com/rooms/",
    "thumb": {
      "src": "square-thumb-2.jpg",
      "placeholder": "280x280.png",
      "alt": "thumb hotel"
    },
    "feature": {
      "src": "rectangle-thumb-2.jpg",
      "placeholder": "1095x616.png",
      "alt": "feature hotel"
    },
    "machine": "Machines Used",
    "inventory": [{
      "model": "Aguila 440",
      "url": "https://www.nespresso.com/ca/en/order/machines/original/essenza-plus-nespresso-d-red"
    }, {
      "model": "Ezena Plus",
      "url": "https://www.nespresso.com/ca/en/order/machines/original/essenza-mini-metal-coffee-machine"
    }]
  }, {
    "id": 3,
    "type": "hotel",
    "partners": false,
    "view": true,
    "title": "Hotel Paillard",
    "subtitle": "Québec (5 locations)",
    "description": "Cette boulangerie phare de la capitale nationale met de l'avant le savoir-faire à la français dans ses quatre succursales. Grâce à Nespresso, elle s'assure que ses cafés soient du même niveau de qualité et de régularité que ses pains et viennoiseries.",
    "address": "2505 Cohen St, St-Laurent, QC H4R 2N5",
    "daily": "Nb. of Coffees Daily",
    "daily_text": "150 (per location)",
    "daily_number": 99,
    "cta": "Visit Site",
    "cta_link": "https://hotelwilliamgray.com/rooms/",
    "thumb": {
      "src": "square-thumb-3.jpg",
      "placeholder": "280x280.png",
      "alt": "thumb hotel"
    },
    "feature": {
      "src": "rectangle-thumb-3.jpg",
      "placeholder": "1095x616.png",
      "alt": "feature hotel"
    },
    "machine": "Machines Used",
    "inventory": [{
      "model": "Aguila 440",
      "url": "https://www.nespresso.com/ca/en/order/machines/original/essenza-plus-nespresso-d-red"
    }, {
      "model": "Ezena Plus",
      "url": "https://www.nespresso.com/ca/en/order/machines/original/essenza-mini-metal-coffee-machine"
    }]
  }, {
    "id": 4,
    "type": "hotel",
    "partners": false,
    "view": true,
    "title": "Hotel Paillard",
    "subtitle": "Québec (5 locations)",
    "description": "Cette boulangerie phare de la capitale nationale met de l'avant le savoir-faire à la français dans ses quatre succursales. Grâce à Nespresso, elle s'assure que ses cafés soient du même niveau de qualité et de régularité que ses pains et viennoiseries.",
    "address": "2505 Cohen St, St-Laurent, QC H4R 2N5",
    "daily": "Nb. of Coffees Daily",
    "daily_text": "150 (per location)",
    "daily_number": 99,
    "cta": "Visit Site",
    "cta_link": "https://hotelwilliamgray.com/rooms/",
    "thumb": {
      "src": "square-thumb-4.jpg",
      "placeholder": "280x280.png",
      "alt": "thumb hotel"
    },
    "feature": {
      "src": "rectangle-thumb-4.jpg",
      "placeholder": "1095x616.png",
      "alt": "feature hotel"
    },
    "machine": "Machines Used",
    "inventory": [{
      "model": "Aguila 440",
      "url": "https://www.nespresso.com/ca/en/order/machines/original/essenza-plus-nespresso-d-red"
    }, {
      "model": "Ezena Plus",
      "url": "https://www.nespresso.com/ca/en/order/machines/original/essenza-mini-metal-coffee-machine"
    }]
  }],
  "entertainment": [{
    "id": 1,
    "type": "entertainment",
    "partners": true,
    "view": true,
    "title": "Entertainment Robert's Pizza",
    "subtitle": "Québec (5 locations)",
    "description": "Cette boulangerie phare de la capitale nationale met de l'avant le savoir-faire à la français dans ses quatre succursales. Grâce à Nespresso, elle s'assure que ses cafés soient du même niveau de qualité et de régularité que ses pains et viennoiseries.",
    "address": "2505 Cohen St, St-Laurent, QC H4R 2N5",
    "daily": "Nb. of Coffees Daily",
    "daily_text": "150 (per location)",
    "daily_number": 99,
    "cta": "Visit Site",
    "cta_link": "https://www.osm.ca/en/home-osm/",
    "thumb": {
      "src": "square-thumb-1.jpg",
      "placeholder": "280x280.png",
      "alt": "thumb entertainment"
    },
    "feature": {
      "src": "rectangle-thumb-1.jpg",
      "placeholder": "1095x616.png",
      "alt": "feature entertainment"
    },
    "machine": "Machines Used",
    "inventory": [{
      "model": "Aguila 440",
      "url": "https://www.nespresso.com/ca/en/order/machines/original/essenza-plus-nespresso-d-red"
    }, {
      "model": "Ezena Plus",
      "url": "https://www.nespresso.com/ca/en/order/machines/original/essenza-mini-metal-coffee-machine"
    }]
  }, {
    "id": 2,
    "type": "entertainment",
    "partners": true,
    "view": true,
    "title": "Entertainment Paillard",
    "subtitle": "Québec (5 locations)",
    "description": "Cette boulangerie phare de la capitale nationale met de l'avant le savoir-faire à la français dans ses quatre succursales. Grâce à Nespresso, elle s'assure que ses cafés soient du même niveau de qualité et de régularité que ses pains et viennoiseries.",
    "address": "2505 Cohen St, St-Laurent, QC H4R 2N5",
    "daily": "Nb. of Coffees Daily",
    "daily_text": "150 (per location)",
    "daily_number": 99,
    "cta": "Visit Site",
    "cta_link": "https://www.osm.ca/en/home-osm/",
    "thumb": {
      "src": "square-thumb-2.jpg",
      "placeholder": "280x280.png",
      "alt": "thumb entertainment"
    },
    "feature": {
      "src": "paillard.jpg",
      "placeholder": "1095x616.png",
      "alt": "feature entertainment"
    },
    "machine": "Machines Used",
    "inventory": [{
      "model": "Aguila 440",
      "url": "https://www.nespresso.com/ca/en/order/machines/original/essenza-plus-nespresso-d-red"
    }, {
      "model": "Ezena Plus",
      "url": "https://www.nespresso.com/ca/en/order/machines/original/essenza-mini-metal-coffee-machine"
    }]
  }, {
    "id": 3,
    "type": "entertainment",
    "partners": true,
    "view": true,
    "title": "Entertainment Paillard",
    "subtitle": "Québec (5 locations)",
    "description": "Cette boulangerie phare de la capitale nationale met de l'avant le savoir-faire à la français dans ses quatre succursales. Grâce à Nespresso, elle s'assure que ses cafés soient du même niveau de qualité et de régularité que ses pains et viennoiseries.",
    "address": "2505 Cohen St, St-Laurent, QC H4R 2N5",
    "daily": "Nb. of Coffees Daily",
    "daily_text": "150 (per location)",
    "daily_number": 99,
    "cta": "Visit Site",
    "cta_link": "https://www.osm.ca/en/home-osm/",
    "thumb": {
      "src": "",
      "placeholder": "280x280.png",
      "alt": "thumb entertainment"
    },
    "feature": {
      "src": "",
      "placeholder": "1095x616.png",
      "alt": "feature entertainment"
    },
    "machine": "Machines Used",
    "inventory": [{
      "model": "Aguila 440",
      "url": "https://www.nespresso.com/ca/en/order/machines/original/essenza-plus-nespresso-d-red"
    }, {
      "model": "Ezena Plus",
      "url": "https://www.nespresso.com/ca/en/order/machines/original/essenza-mini-metal-coffee-machine"
    }]
  }, {
    "id": 4,
    "type": "entertainment",
    "partners": false,
    "view": true,
    "title": "Entertainment Paillard",
    "subtitle": "Québec (5 locations)",
    "description": "Cette boulangerie phare de la capitale nationale met de l'avant le savoir-faire à la français dans ses quatre succursales. Grâce à Nespresso, elle s'assure que ses cafés soient du même niveau de qualité et de régularité que ses pains et viennoiseries.",
    "address": "2505 Cohen St, St-Laurent, QC H4R 2N5",
    "daily": "Nb. of Coffees Daily",
    "daily_text": "150 (per location)",
    "daily_number": 99,
    "cta": "Visit Site",
    "cta_link": "https://www.osm.ca/en/home-osm/",
    "thumb": {
      "src": "square-thumb-4.jpg",
      "placeholder": "280x280.png",
      "alt": "thumb entertainment"
    },
    "feature": {
      "src": "rectangle-thumb-4.jpg",
      "placeholder": "1095x616.png",
      "alt": "feature entertainment"
    },
    "machine": "Machines Used",
    "inventory": [{
      "model": "Aguila 440",
      "url": "https://www.nespresso.com/ca/en/order/machines/original/essenza-plus-nespresso-d-red"
    }, {
      "model": "Ezena Plus",
      "url": "https://www.nespresso.com/ca/en/order/machines/original/essenza-mini-metal-coffee-machine"
    }]
  }]
};
},{}],"assets/js/index.js":[function(require,module,exports) {
"use strict";

var _partners = _interopRequireDefault(require("./partners.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var filtering = document.querySelector('.filters');
var partnersDirectory = document.querySelector('.quality-partners-directory'); // JSON Data

var partnersconfig = _partners.default.partnersconfig,
    filters = _partners.default.filters,
    restaurants = _partners.default.restaurants,
    hotels = _partners.default.hotels,
    entertainment = _partners.default.entertainment; // Config

var nbrPartners = partnersconfig.number_partners,
    nbrPosts = partnersconfig.number_posts; // Filters

var allFilters = '';
var filterNames = [];
filters.forEach(function (filter) {
  var type = filter.type,
      view = filter.view,
      name = filter.name,
      title = filter.title,
      thumb = filter.thumb;
  var filterlist = '';

  if (view !== false) {
    filterlist = "\n      <div class=\"filter filter-".concat(type, " outline\" style=\"background-image: url('").concat(thumb.src ? thumb.src : thumb.placeholder, "');\">\n        <button type=\"button\" data-filter=\".").concat(type, "\" data-title=\"").concat(title, "\">").concat(name, "</button>\n      </div>\n    ");
    filterNames.push(type);
  }

  allFilters += filterlist;
});
filtering.innerHTML = allFilters;
var filterButtons = document.querySelectorAll("[data-filter]");
filterButtons.forEach(function (filterButton) {
  filterButton.addEventListener('click', function (e) {
    var currentActive = e.currentTarget;
    removeActive(currentActive);
    var filterValue = filterButton.dataset.filter.substring(1);
    var filterButtonTitle = filterButton.dataset.title;
    sortSelection(filterValue, filterButtonTitle);
  });
}); // Add Filter Active Class

function removeActive(currentActive) {
  filterButtons.forEach(function (filterButton) {
    if (filterButton !== currentActive) {
      filterButton.classList.remove('is-active');
    }

    return currentActive.classList.add('is-active');
  });
} // Compare/Get Data


function compare(filterValue) {
  switch (filterValue) {
    case 'restaurant':
      return restaurants;

    case 'hotel':
      return hotels;

    case 'entertainment':
      return entertainment;
  }
} // Iterate List Items


function listItem(inventory) {
  var inventoryList = '';

  for (var i = 0; i < inventory.length; i++) {
    inventoryList += "<li><a href=\"".concat(inventory[i].url, "\" target=\"_blank\">").concat(inventory[i].model, "</a></li>");
  }

  return inventoryList;
} // Create Two Lists


function sortSelection(filterValue, filterButtonTitle) {
  var currentFilterValues = compare(filterValue);
  var partnersList = []; // Sort Partners

  currentFilterValues.forEach(function (currentFilterValue) {
    var partners = currentFilterValue.partners,
        view = currentFilterValue.view;

    if (partners && view) {
      partnersList.push(currentFilterValue);
    }
  });

  var newPartnersList = _toConsumableArray(partnersList.slice(0, nbrPartners));

  var otherPosts = []; // Sort Remaining Posts

  currentFilterValues.forEach(function (remainingList) {
    var partners = remainingList.partners,
        view = remainingList.view;

    if (!partners && view) {
      otherPosts.push(remainingList);
    }
  });

  var newOtherPosts = _toConsumableArray(otherPosts.slice(0, nbrPosts));

  displayPosts(newPartnersList, newOtherPosts, filterButtonTitle);
} // Display


function displayPosts(cardPartners, cards, filterButtonTitle) {
  var sectionTitle = "\n    <h2 class=\"section__title\">".concat(filterButtonTitle, "</h2>\n  ");
  var partnersTemplate = '';
  cardPartners.forEach(function (cardPartner) {
    var id = cardPartner.id,
        type = cardPartner.type,
        title = cardPartner.title,
        description = cardPartner.description,
        address = cardPartner.address,
        daily = cardPartner.daily,
        txtDaily = cardPartner.daily_text,
        cta = cardPartner.cta,
        cta_link = cardPartner.cta_link,
        feature = cardPartner.feature,
        machine = cardPartner.machine,
        inventory = cardPartner.inventory;
    partnersTemplate += "\n      <article data-id=\"".concat(id, "\" data-type=\"").concat(type, "\" class=\"card card-partner\">\n        <a href=\"").concat(cta_link, "\" target=\"_blank\" class=\"card__img\" style=\"background-image: url('").concat(feature.src ? feature.src : feature.placeholder, "');\"></a>\n        <div class=\"card__content\">\n          <h3 class=\"card__title\">").concat(title, "</h3>\n          <h4 class=\"card__subtitle\">").concat(address, "</h4>\n          <div class=\"card__description\">\n            <p>").concat(description, "</p>\n          </div>\n          <div class=\"grid-list\">\n            <div>\n              <h5 class=\"list__title icon-daily\">").concat(daily, "</h5>\n              <ul>\n                <li>").concat(txtDaily, "</li>\n              </ul>\n            </div>\n            <div>\n              <h5 class=\"list__title\">").concat(machine, "</h5>\n              <ul>").concat(listItem(inventory), "</ul>\n            </div>\n          </div>\n          <a href=\"").concat(cta_link, "\" target=\"_blank\" class=\"card__button\">").concat(cta, "</a>\n        </div>\n      </article>\n    ");
  });
  var postsTemplate = '';
  cards.forEach(function (card) {
    var id = card.id,
        type = card.type,
        thumb = card.thumb,
        title = card.title,
        address = card.address,
        nbrDaily = card.daily_number,
        cta_link = card.cta_link,
        machine = card.machine,
        inventory = card.inventory;
    postsTemplate += "\n      <article data-id=\"".concat(id, "\" data-type=\"").concat(type, "\" class=\"card zoom\">\n        <a href=\"").concat(cta_link, "\" target=\"_blank\" class=\"card__img\">\n          <img src=\"").concat(thumb.src ? thumb.src : image.placeholder, "\" alt=\"").concat(thumb.alt, "\" width=\"280\" height=\"280\">\n        </a>\n        <div class=\"card__content\">\n          <h3 class=\"card__title\">").concat(title, "</h3>\n          <div class=\"card__address\">\n            <p>").concat(address, "</p>\n          </div>\n          <h4 class=\"list__title\">").concat(machine, "</h4>\n          <ul>").concat(listItem(inventory), "</ul>\n          <span class=\"icon-daily\">").concat(nbrDaily, "</span>\n        </div>\n      </article>\n    ");
  });
  var pageTemplate = "\n    <div class=\"container animated is-fadeIn\">\n      <div class=\"section__content\">".concat(sectionTitle, "</div>\n      <div class=\"quality-partners-feature\">").concat(partnersTemplate, "</div>\n    </div>\n    <div class=\"quality-partners-posts\">\n      <div class=\"container\">\n        <div class=\"grid-three\">").concat(postsTemplate, "</div>\n      </div>\n    </div>\n  ");
  setTimeout(function () {
    partnersDirectory.innerHTML = pageTemplate;
  }, 100);
}
},{"./partners.json":"assets/js/partners.json"}],"node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "56239" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel/src/builtins/hmr-runtime.js","assets/js/index.js"], null)
//# sourceMappingURL=/js.5c615dc2.js.map