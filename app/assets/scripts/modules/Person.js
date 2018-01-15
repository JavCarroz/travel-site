function Person(name, favColor) {
  this.name = name;
  this.favoriteColor = favColor;
  this.greet = function() {
    console.log('cool thing happens!');
  }
}

module.exports = Person;
