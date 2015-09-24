let $$ = require('./$$.js');

module.exports = class Selects {
  constructor(config) {
    this.categorySelect = $$(config.category)[0];
    this.difficultySelect = $$(config.difficulty)[0];
  }

  fillCategory(categories, categoriesTable) {
    let html = '';

    categories.forEach((category) => {
      html += `<option value="${category}">${categoriesTable[category]}</option>`;
    });

    this.categorySelect.innerHTML = html;
  }

  fillDifficulty(difficulties, difficultiesTable) {
    let html = '';

    difficulties.forEach((difficulty) => {
      html += `<option value="${difficulty}">${difficultiesTable[difficulty]}</option>`;
    });

    this.difficultySelect.innerHTML = html;
  }

  getCurrentCategory() {
    return this.categorySelect.value;
  }

  getCurrentDifficulty() {
    return this.difficultySelect.value;
  }
}