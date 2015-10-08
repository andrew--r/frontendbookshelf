let $$ = require('./modules/$$.js');
let pseudohover = require('./modules/pseudohover.js');
let BookList = require('./modules/BookList.js');
let Selects = require('./modules/selects.js');
let PubSub = require('./pubsub.js');


class Main extends PubSub {
  constructor() {
    pseudohover();

    super();

    this.bookList = new BookList({
      baseClass: '.book'
    });

    this.selects = new Selects({
      category: '.js-category',
      difficulty: '.js-difficulty',
      language: '.js-language'
    });

    this.categoriesTable = {
      'javascript': 'JavaScript',
      'css': 'CSS',
      'rwd': 'отзывчивой вёрстке',
      'backbone': 'Backbone',
      'perfomance': 'оптимизации',
      'html5': 'HTML5',
      'coffeescript': 'CoffeeScript',
      'jquery': 'jQuery'
    };

    this.difficultiesTable = {
      'beginner': 'начинающих',
      'advanced': 'продвинутых'
    };

    this.languagesTable = {
      'en': 'английском',
      'ru': 'русском'
    };

    this.bindEvents();

    this.start();
  }

  bindEvents() {
    // functions to handle select values changes
    let categoryChanged = (cat) => {
      this.bookList.filter({
        criterion: 'category',
        category: cat
      });

      this.selects.fill('language', this.bookList.getCriterion('languages'), this.languagesTable);
      languageChanged(this.selects.getCurrentValue('language'));
    };

    let languageChanged = (lang) => {
      this.bookList.filter({
        criterion: 'language',
        category: this.selects.getCurrentValue('category'),
        language: lang
      });

      this.selects.fill('difficulty', this.bookList.getCriterion('difficulties'), this.difficultiesTable);
      difficultyChanged(this.selects.getCurrentValue('difficulty'));
    };

    let difficultyChanged = (diff) => {
      this.bookList.filter({
        criterion: 'difficulty',
        category: this.selects.getCurrentValue('category'),
        language: this.selects.getCurrentValue('language'),
        difficulty: diff
      });

      window.Stretchy.resizeAll();
    };

    // when application starts
    this.on('start', () => {
      this.selects.fill('category', this.bookList.getCriterion('categories'), this.categoriesTable);

      categoryChanged(this.selects.getCurrentValue('category'));
    });

    // when user chooses category
    this.selects.categorySelect.addEventListener('change', (e) => {
      categoryChanged(e.target.value);
    });

    // when language criterion changes
    this.selects.languageSelect.addEventListener('change', (e) => {
      languageChanged(e.target.value);
    });

    // when difficulty criterion changes
    this.selects.difficultySelect.addEventListener('change', (e) => {
      difficultyChanged(e.target.value);
    });
  }

  start() {
    this.trigger('start');
  }
}

window.main = new Main();

window.PubSub = PubSub;