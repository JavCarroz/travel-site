var $ = require('jquery');
//var Person = require('./modules/Person'); old way
import Person from './modules/Person'; // new EC6 way!

class Adult extends Person {
  payTaxes(){
    console.log(this.name + " has become an Adult, go pay your taxes!");
  }
}

alert('Testing 1,2,3,4!');

var john = new Person ("John Doe", "blue");


var jane = new Adult("Jane Smith", "yellow");
jane.payTaxes();
console.log(jane.favoriteColor.toString());
