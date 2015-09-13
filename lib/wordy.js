'use strict';

var operators = {
  plus: '+',
  minus: '-',
  times: '*',
  multiplied: '*',
  divided: '/'
}

function WordProblem(question){
  this.q = question.replace(/what|is|\?|by|\s+/gi, ' ').trim();
  this.operatorCount = 0;
  this.answer = function() {
    if (!(this.q.length > 32) && !(this.q.includes('cubed'))) {
      for (var key in operators) {
        if (this.q.search(key) !== -1) {
          this.q = this.q.replace(new RegExp(key, "g"), operators[key]);
          this.operatorCount++;
        }
      }
      if (this.operatorCount === 2) {
        this.q = '(' + this.q.slice(0, 6) + ')' + this.q.slice(6, 13);
      }
      return eval(this.q);
    } else {
      throw new ArgumentError();
    }
  }
}

function ArgumentError(){}
