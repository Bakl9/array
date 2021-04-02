var cars = ['audi', 'bmv', 'mersedes']

 cars.push('volvo') // добавления 
 cars.shift() // Удаляет и возращаяет последний элемент
 cars.unshift('bentley') //Добавляет элемент в первую позицыю 

 console.log(cars.indexOf('bmv')) //проверяет по какому счету лежитэлемент 
 console.log(cars)

const people = [
    { name: 'Вдладилен', age: 25, budget: 40000},
    { name: 'Елена', age: 26, budget: 3400},
    { name: 'Игорь', age: 40, budget: 5000},
    { name: 'Михаил', age: 55, budget: 1800},
    { name: 'Василиса', age: 24, budget: 1500},
    { name: 'Виктория', age: 18, budget: 2300},
];

// for ( let qqq of people) {
//     console.log(qqq)
// };
// let newPeople = people.filter(person => person.age)
 
//  console.log(newPeople)
// for ( let i = 0; i < people.length; i++) {
//     console.log(people[i])
// }




// people.forEach(function (people){
//     console.log(people)
// })


// people.forEach(person => console.log(person))


// let aduls = [];

// for (let i = 0; i < people.length; i++) {
//     if (people[i].age >= 18) {
//         aduls.push(people[i])
//     }
// }

// console.log(aduls)


// const adults = []

// for (let i = 0; i < people.length; i ++) {
//     if (people[i].age >= 30) {
//         adults.push(people[i]);
//     };
// };

// console.log(adults)


// let number = [1, 2, 3, 3, 6, 4, 6]

// let number_1 = new Set(number);
// console.log(number_1)

// let  Adults = people.Filter ( person => {
//     if (person.budget = 4000) {
//         return true
//     };
// });

// console.log(Adults)


