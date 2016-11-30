console.log('abcd');
function b(name){
  console.log('Toi la '+name);
}
module.exports.b = b;
module.exports.Person = Person;

function Person(name, age){
  this.ten = name;
  this.tuoi = age;
  this.getInfo = function(){
    return this.ten +': '+ this.tuoi
  }
}
