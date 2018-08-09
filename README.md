# BDC Engine [![Build Status](https://travis-ci.com/blackdeck/bdc-engine.svg?branch=master)](https://travis-ci.com/blackdeck/bdc-engine)
 
[Live demo](https://bdc-engine.herokuapp.com/)





# Project structure

Let's keep component code/styles/tests in folders with appropriate name:
````
└── Popup
    ├── Popup.css
    ├── Popup.js
    └── Popup.spec.js
````
## common folders
* `bin` - CLI scripts
* `build` - built app (git ignored)
* `config` - config files and configs depend on `NODE_ENV` variable e.g. `development.json` uses when `NODE_ENV==='development'`. Here can be conflicts after `eject`, so config politics should be discussed.
* `public` - static files which usually in server `public` folder e.g. assets, index.html

## components 
* `containners` - connected to store container components
* `layout` - reusable components for page layout e.g. <Footer/>, <Header/>
* `utils` - just reusable components which you can't imagine place

and other folders by business rules, it can be `forms`, `hocs`.

## css
Let's follow [7-1 sass pattern](https://sass-guidelin.es/#the-7-1-pattern)

# Code conventions

## file naming

File name should have 
* `PascalCase` if file exports: class, component
* `snake-case` if file exports: function, object, map, list

## variable/class/component/function naming

Is the hardest part of programming
