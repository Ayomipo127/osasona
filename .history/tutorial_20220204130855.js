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

const todoText = todos.map(function (todo) {
	return todo.text;

});

console.log(todoText);

const todoCompleted = todos.filter(function (todo) {
	return todo.isCompleted === true;

}).map(function (todo) {
	return todo.text;
})

console.log(todoCompleted);


//conditional

const x = 6;

const y = 11;

if (x > 5 && y > 10) {
	console.log('x is more than 5 or y is more than 10');	
} 


const color = x > 10 ? 'red' : 'blue';


switch (color) {
	case 'red':
		console.log('color is red');
		break;
	case 'blue':
		console.log('color is blue');

	default:
		console.log('color is NOT red or blue');
		break;
}


//functions

function addNums(num1 = 1, num2 = 2) => num1 + num2);


addNums(5, 5);