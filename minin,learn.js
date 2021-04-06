
const people = [
    { name: 'Вдладилен', age: 25, budget: 40000},
    { name: 'Елена', age: 26, budget: 3400},
    { name: 'Игорь', age: 40, budget: 5000},
    { name: 'Михаил', age: 55, budget: 1800},
    { name: 'Василиса', age: 24, budget: 1500},
    { name: 'Виктория', age: 18, budget: 2300},
];

const lolPeople = people.map(person => `${person.name} (${person.age})`);
console.log(lolPeople);


const adults = people.filter(person => person.age <= 30);
console.log(adults);

const amourt = people.reduce((total, person) => total + person.budget, 0);
console.log(amourt);

people.forEach(person => console.log(person));

const igor = people.find(person => person.name === 'Игорь');
console.log(igor)
