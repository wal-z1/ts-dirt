console.log("This is a TypeScript file.");
console.log(Math.floor(4.7));

//something

let integervalue: number = 10;
console.log(integervalue);

let randomstring: string = "Hello";
console.log(randomstring);

let randomvalue: any = 5;

console.log(randomvalue);

type person = {
	name: string;
	age: number;
	phone?: string; // optional property (can be undefined)
};

let walid: person = {
	name: "Walid",
	age: 20,
	phone: "123-456-7890",
};

class PersonClass {
	name: string;
	age: number;

	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}
}

let person1 = new PersonClass("Alice", 30);

function sayhello(person: person): string {
	return `Hello, ${person.name}! You are ${person.age} years old.`;
}

function withoptional(num1: number, num2?: number) {
	if (num2 !== undefined) {
		return num1 + num2;
	} else {
		return num1;
	}
}

function withdefault(num1: number, num2: number = 6) {
	return num1 + num2;
}

function takeabunchofargs(...numbers: number[]) {
	for (let num of numbers) {
		console.log(num);
	}
}

const adder = (a: number, b: number) => a + b;

console.log(adder(5, 10));

const voidfunction = (): void => {
	console.log("void func");
};

// lets define a  mulitype variable
let multivar: number | string;

multivar = 5;

console.log(multivar);
multivar = "Now I'm a string";
console.log(multivar);

let onlythesevalues: 1 | 2 | 3;

function onlytakethefollwoignvalues(val: 24 | 28 | 32) {
	console.log(`passed in ${val}`);
}

type strornum = string | number;

let anothermultivar: strornum;

type book = {
	title: string;
	description: string;
};

let mybook: book = {
	title: "TypeScript",
	description: "TS.",
};
