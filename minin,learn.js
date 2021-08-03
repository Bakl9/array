
const people = [
    { name: 'Вдладилен', age: 25, budget: 40000},
    { name: 'Елена', age: 26, budget: 3400},
    { name: 'Игорь', age: 40, budget: 5000},  
    { name: 'Михаил', age: 55, budget: 1800},
    { name: 'Василиса', age: 24, budget: 1500}, 
    { name: 'Виктория', age: 18, budget: 2300},
];

people.forEach(person => console.log(person));

const indexIgor = people.find(person => person.name === 'Игорь');
console.log(indexIgor);

const newPeople = people.map(person => `${person.name} (${person.budget})`);
console.log(newPeople);

const adults = people.reduce((total, person) => total + person.age, 0);
console.log(adults);

const many = people.filter(person => person.budget >= 3000);
console.log(many);

const indexVladelen = people.findIndex( person => person.name === 'Владилен');
console.log(indexVladelen)


const cities = [
    {name: 'Moscow', population: 12506468},
    {name: 'Saint Petersburg', population: 5351935},
    {name: 'Novosibirsk', population: 1612833},
    {name: 'Kaliningrad', population: 482443},
    {name: 'Kaluga', population: 336726}
];

const millionPlusCities = cities.filter(person => person.population > 1000000)
  console.log(millionPlusCities);


const listName = ['makarov', 'Vladilen', 'Dmitry','Dmitry','Dmitry'];
const newList = [new Set(listName)]
console.log(newList)


// document.querySelector('#prompt').addEventListener('click', function () {
//    var age = prompt('Видите свой возраст')
    


//    if (age >= 18) {
//     alert('Вы можете пройти')
//    } else {
//        alert('Вы еще слишком молоды')
//    };
// });

var str = '1,2,3,4,5,6,6,7,5,1'
var array = str.split(',')
console.log(array.join(';')) 
console.log(array.reverse()) 
array.splice(9,0,'11')


console.log(array) 

var newArray = array.concat('with','color') // добавляет новые элменты в массив 
console.log(newArray)

var objArr = [
    {name: 'Victor', age:25},
    {name: 'Elena', age:24},
    {name: 'Max', age:20},
];

var newPerson = objArr.find(function(person){
    return person.age === 20
});

console.log(newPerson)

var numberList = [1,2,3,4,5,6,7,8,9,0].filter(function(i) {
    return i % 2 === 0
});

console.log(numberList)

var Array = ['1', '2', '4', '2', '6', '1', '5', '10'];

var newList = Array.map(function(i){
    return parseInt(i);
});

newList.filter(function(i){
    return i % 2 === 0
});

newList.splice(1,0,'123')
console.log(newList)
