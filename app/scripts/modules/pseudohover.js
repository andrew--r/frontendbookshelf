var $$ = require('./$$.js');

module.exports = function() {
  $$('a').on('mouseover', function() {
    let href = this.attributes.href.value;

    if (href != '' && href != '#') {
      $$('a[href="' + href + '"]').forEach(function (l) {
        l.classList.add('hover');
      });
    }
  });

  $$('a').on('mouseout', function() {
    $$('a').forEach(function(l) {
      l.classList.remove('hover');
    });
  });
}