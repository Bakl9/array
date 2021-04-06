
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


