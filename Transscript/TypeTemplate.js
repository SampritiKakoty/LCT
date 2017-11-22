var person = {
    firstName: "Accenture",
    lastName: "Happy",
    sayHello: function () { }
};
person.sayHello = function () {
    return "emp name::" + this.firstName;
};
console.log(person.sayHello());
