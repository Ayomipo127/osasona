const name = 'john';

const age = 30;

console.log('My Name is ' + name + ' and i am ' + age);
 
const hello = `My name is ${name} and i am ${age}`;

console.log(hello);

const s = 'hello world';

console.log(s.toUpperCase());

//Arrays - variables that hold multiple values

const fruits = ['apple', 'oranges', 'pears']

fruits[3] = 'grapes';


fruits.push('mangoes');

fruits.pop();
console.log(Array.isArray('hello'));

console.log(fruits);

const person = {
	firstName: 'John',
	lastName: 'Doe',
	age: 30,
	hobbies: ['music', 'movies', 'sports'],
	address: {
		street: '50 main st',
		city: 'Boston',
		state: 'MA'
	}
 }

person.email = 'jogn@gmail.com'
 
console.log(person);


const todos = [{
	Id: 1,
	text: 'Take out trash',
	isCompleted: true
},
{
	Id: 2,
	text: 'Meeting with the boss',
	isCompleted: true
},
{
	Id: 3,
	text: 'Dentist appt',
	isCompleted: false
}

];

const todoJSON = JSON.stringify(todos);

console.log(todoJSON);

//FOR

for (let todo of todos) {
	 console.log(todo.Id);
}
 
 //for each, map, filter


todos.forEach(function (todo) {
	console.log(todo.text);

});

const todoText =todos.map(function (todo) {
	console.log(todo.text);

});
