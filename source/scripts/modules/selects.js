let $$ = require('./$$.js');

module.exports = class Selects {
  // @config — object
  // @config.categorySelect,
  // @config.difficultySelect,
  // @config.languageSelect — string
  constructor(config) {
    this.categorySelect = $$(config.category)[0];
    this.difficultySelect = $$(config.difficulty)[0];
    this.languageSelect = $$(config.language)[0];
  }

  // @type — string
  // type of select you want to fill in
  // @typeValues — array
  // values to fill in the select
  // @typeTable — object
  // how to transform option values into readable names
  fill(type, typeValues, typeTable) {
    let html = '';

    typeValues.forEach((value) => {
      html += `<option value="${value}">${typeTable[value]}</option>`
    });

    let select = type + 'Select';

    this[select].innerHTML = html;
  }

  getCurrentValue(type) {
    let select = type + 'Select';

    return this[select].value;
  }
}
