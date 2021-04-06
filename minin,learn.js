

const lolPeople = people.map(person => `${person.name} (${person.age})`);
console.log(lolPeople);


const adults = people.filter(person => person.age <= 30);
console.log(adults);

const amourt = people.reduce((total, person) => total + person.budget, 0);
console.log(amourt);

people.forEach(person => console.log(person));

const igor = people.find(person => person.name === 'Игорь');
console.log(igor)
