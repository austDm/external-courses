'use strict'
function Hangman(word) {
  word = word.toLowerCase();
  var arrWord = [];
  var i;
  for (i = 0; i < word.length; i++) {
    arrWord[i] = '_';
  }
  this.arrWord = arrWord;
  this.errors = 6;
  this.wrongSymbols = [];
  
  this.guess = function (letter) {
    letter = letter.toLowerCase();
    if (this.errors) {
      if (word.indexOf(letter) === -1) {
        this.errors -= 1;
        this.wrongSymbols.push(letter);
        console.log('wrong letter, errors left ' + this.errors + ' | ' + this.wrongSymbols.join(','));
      } else { 
        for (i = 0; i < word.length; i++) {
          if (letter === word.split('')[i]) {
            this.arrWord[i] = word.split('')[i];
          }
        }
        if (this.arrWord.join('') !== word) {
          console.log(this.arrWord.join(''));
        } else {
          console.log(word + '| You won!');
        }
      }
    } else {
      console.log ('No errors remain, noob.')
    }
    return this;
  }

  this.getGuessedString = function () {
    console.log (this.arrWord.join(''));
    return this;
  }

  this.getErrorsLeft = function () {
    console.log (this.errors);
    return this;
  }

  this.getWrongSymbols = function () {
    console.log (this.wrongSymbols);
    return this;
  }

  this.startAgain = function (newWord) {
    word = newWord.toLowerCase();
    var arrWord = [];
    var i;
    for (i = 0; i < word.length; i++) {
      arrWord[i] = '_'
    }
    this.arrWord = arrWord;
    this.errors = 6;
    this.wrongSymbols = [];
    return this;
  }

  this.getStatus = function () {
    console.log(this.arrWord.join('') + ' | errors left ' + this.errors);
  }
}
module.exports = new Hangman('webpurple');