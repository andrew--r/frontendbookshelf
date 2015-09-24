let $$ = require('./$$.js');

module.exports = class BookList {
  // @config — object
  // @config.baseClass — string
  // @config.defaultCategory — string
  // @config.defaultDifficulty — string
  constructor(config) {
    this.list = $$(config.baseClass);
    this.categories = [];
    this.difficulties = [];
  }

  // helper function to avoid code repetition
  _filterAll(type, name) {
    console.log(arguments);
    // hide elements that doesn't match with certain parameter
    $$(`.book:not([data-${type}="${name}"])`).forEach((i) => {
      let index = this.list.indexOf(i);
      this.list[index].classList.add('js-hidden');
    });

    // show elements that matches
    $$(`.book[data-${type}*="${name}"]`).forEach((i) => {
      let index = this.list.indexOf(i);
      this.list[index].classList.remove('js-hidden');
    });
  }

  _filterCategory(type, name, category) {
    // hide elements that doesn't match with certain parameter
    console.log($$(`.book[data-categories=${category}]:not([data-${type}="${name}"])`));
    $$(`.book[data-categories=${category}]:not([data-${type}="${name}"])`).forEach((i) => {
      let index = this.list.indexOf(i);
      this.list[index].classList.add('js-hidden');
    });

    // show elements that matches
    $$(`.book[data-categories=${category}][data-${type}*="${name}"]`).forEach((i) => {
      let index = this.list.indexOf(i);
      this.list[index].classList.remove('js-hidden');
    });
  }

  // @name — string
  // filters list of books by category
  filterByCategory(name) {
    this._filterAll('categories', name);
  }

  // @name — string
  // filters list of books by difficulty
  filterByDifficulty(name, category) {
    this._filterCategory('difficulty', name, category);
  }

  // get all categories of currently visible elements
  getCategories() {
    this.categories = [];

    this.list.forEach((item) => {
      // check visibility of an element
      if (!item.offsetWidth > 0 && !item.offsetHeight > 0) return;

      let categories = item.getAttribute('data-categories').toLowerCase().split(',');

      categories.forEach((c) => {
        if (this.categories.indexOf(c) == -1) this.categories.push(c);
      });
    });

    return this.categories;
  }

  // get all difficulties of currently visible elements
  getDifficulties() {
    this.difficulties = [];

    this.list.forEach((item) => {
      // check visibility of an element
      if (!item.offsetWidth > 0 && !item.offsetHeight > 0) return;

      let difficulties = item.getAttribute('data-difficulty').toLowerCase().split(',');

      difficulties.forEach((d) => {
        if (this.difficulties.indexOf(d) == -1) this.difficulties.push(d);
      });
    });

    return this.difficulties;
  }
}