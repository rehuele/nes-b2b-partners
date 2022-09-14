# Nespresso B2B Quality Partners

Nespresso B2B Quality Partners Landing Page.

Contains documentation of the parameters that change the JSON settings (at the bottom ↓).

Starts project by running a local server, watches SASS files, builds SASS to CSS with live reload.
With the first commands (_yarn_ and _npm install_), the _node modules_ will be installed.

The main package bundle of this project is [Parcel](https://parceljs.org/). It's blazing fast, with little to zero configuration web application bundler.


## Contributing / System Requirements
---

You will need to install the following in order to contribute to the project.

- [Node Stable LTS](https://nodejs.org/en/) (v12.18.3)
- [Yarn](https://yarnpkg.com/getting-started)
- [NPM](https://www.npmjs.com/get-npm) (comes with Node by default)

The easiest way to install Node is to use nvm, which enables you to install multiple node versions on the same machine.
Once nvm is installed, run the following command in your terminal:

```
nvm install v6.6.0 && nvm alias default 6.6.0
```

## Install
---

````
yarn
````
or
````
npm install
````

## Getting Started
---

````
yarn dev
````
or
````
npm run dev
````

## Install Parcel
---

````
yarn global add parcel-bundler
````
or
````
npm install -g parcel-bundler
````

## Production
---

````
yarn build
````
or
````
npm run build
````

Unfortunately there has not been a command yet created to transfer assets into the _dist_ folder. So for now, it mus be manually done. Same goes for the _HTML_ file. Remember to alter links if necessary.


## Additional Plugins
---

Sometimes additional plugins are what help get the end result. Here's a list of a few:
- [AOS](https://github.com/michalsnik/aos) (Animate On Scroll Library)

---

## JSON Settings

#### Configuration

```json
  "partnersconfig":{
    "number_partners":4,
    "number_posts":7
  },
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `number_partners` | `int` | # of **featured partners** to show at a time |
| `number_posts` | `int` | # of partners to show at a time |

#### Filters

```json
  "filters":[
    {
      "view":true,
      "type":"restaurant",
      "name":"Restaurants",
      "title":"Restaurant Partners",
      "thumb":{
        "src":"assets/img/filter-restaurant.jpg",
        "placeholder":"assets/img/450x253.png",
        "alt":"thumb restaurants"
      }
    },
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `view`      | `boolean` | Enables to show partner |
| `type`      | `array` | Indentifies type of partner (restaurant, hotel) |
| `name`      | `string` | Filter name |
| `title`      | `string` | Section title |

#### Categories

```json
  "restaurants":[
    {
      "id":1,
      "type":"restaurant",
      "partners":true,
      "view":true,
      "title":"Restaurant Robert's Pizza",
      "subtitle":"Québec (5 locations)",
      "description":"Cette boulangerie phare de la capitale nationale met de l'avant le savoir-faire à la français dans ses quatre succursales. Grâce à Nespresso, elle s'assure que ses cafés soient du même niveau de qualité et de régularité que ses pains et viennoiseries.",
      "address":"2505 Cohen St, St-Laurent, QC H4R 2N5",
      "daily":"Nb. of Coffees Daily:",
      "daily_text":"150 (per location)",
      "daily_number":99,
      "cta":"Visit Site",
      "cta_link":"https://www.restaurant-toque.com/en",
      "thumb":{
        "src":"assets/img/square-thumb-1.jpg",
        "placeholder":"assets/img/280x280.png",
        "alt":"thumb restaurant"
      },
      "feature":{
        "src":"assets/img/paillard.jpg",
        "placeholder":"assets/img/1095x616.png",
        "alt":"feature restaurant"
      },
      "machine":"Machines Used:",
      "inventory":[
        {
          "model":"Aguila 440",
          "url":"https://www.nespresso.com/ca/en/order/machines/original/essenza-plus-nespresso-d-red"
        },
        {
          "model":"Ezena Plus",
          "url":"https://www.nespresso.com/ca/en/order/machines/original/essenza-mini-metal-coffee-machine"
        }
      ]
    },
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `int` | Sets unique ID within category |
| `type`      | `array` | Indentifies type of partner (restaurant, hotel) |
| `partners`      | `boolean` | Enables to show as **feature partner** |
| `view`      | `boolean` | Enables to show partner |
| `title`      | `string` | Partner name |
| `subtitle`      | `string` | Québec (5 locations) |
| `description`      | `string` | A short written description of partner |
| `address`      | `string` | 2505 Cohen St, St-Laurent, QC H4R 2N5 |
| `daily`      | `string` | Nb. of Coffees Daily: |
| `daily_text`      | `string` | 150 (per location) |
| `daily_number`      | `int` | 99 |
| `cta`      | `string` | Visit Site |
| `cta_link`      | `url` | Partner URL |
| `machine`      | `string` | Machines Used:|

#### Thumb: Image

| Thumb Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `src`      | `url` | Image URL path |
| `placeholder`      | `url` | Placeholder URL path |
| `alt`      | `string` | A short written description of an image |

#### Feature: Image

| Feature Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `src`      | `url` | Image URL path |
| `placeholder`      | `url` | Placeholder URL path |
| `alt`      | `string` | A short written description of an image |


#### Inventory

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `model`      | `string` | Product name |
| `url`      | `url` | Product URL |


  
## Static Features

- Hero / Header
- Introduction Paragraph
- Partner Logos
- Additional Site Links

  
## Partner Logos

The logos are in a row of 5 (desktop). Each logo has a _max-width_ of _150px_.  
This section is build with CSS grid layout. It's been accomadated for the inclusion of more logos.
