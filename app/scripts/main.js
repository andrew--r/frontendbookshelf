let $$ = require('./modules/$$.js');
let pseudohover = require('./modules/pseudohover.js');
let BookList = require('./modules/BookList.js');
let Selects = require('./modules/selects.js');
let pubSubExtend = require('./pubsub.js');


class Main {
  constructor() {
    pseudohover();

    pubSubExtend.call(this);

    this.bookList = new BookList({
      baseClass: '.book'
    });

    this.selects = new Selects({
      category: '.js-category',
      difficulty: '.js-difficulty'
    });

    this.categoriesTable = {
      'javascript': 'JavaScript',
      'css': 'CSS',
      'rwd': 'отзывчивой вёрстке',
      'backbone': 'Backbone',
      'perfomance': 'оптимизации'
    };

    this.difficultiesTable = {
      'beginner': 'начинающих',
      'advanced': 'продвинутых'
    };

    this.bindEvents();

    this.start();
  }

  bindEvents() {
    // when application starts
    this.on('start', () => {
      this.selects.fillCategory(this.bookList.getCategories(), this.categoriesTable);

      this.bookList.filterByCategory(this.selects.getCurrentCategory());
      this.selects.fillDifficulty(this.bookList.getDifficulties(), this.difficultiesTable);
    });

    // when user chooses category
    this.selects.categorySelect.addEventListener('change', (e) => {
      this.bookList.filterByCategory(e.target.value);
      this.selects.fillDifficulty(this.bookList.getDifficulties(), this.difficultiesTable);
    });

    // when user chooses difficulty
    this.selects.difficultySelect.addEventListener('change', (e) => {
      console.log('asd');
      this.bookList.filterByDifficulty(e.target.value, this.selects.getCurrentCategory());
    });
  }

  start() {
    this.trigger('start');
  }
}

window.main = new Main();