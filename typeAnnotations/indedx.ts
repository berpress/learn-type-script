/* eslint-disable no-unused-vars */
const fruit: string = 'apple';
const salary: number = 10000;
const isHot: boolean = false;
const date: Date = new Date();
const oranges: number = 11;
let nothing: null = null;
let nothing1: undefined = undefined;
const blue = 'blue';

// arrays
let colors: string[] = ['red', 'blue', 'orange'];
let numbers: number[] = [1, 2];
let booleans: boolean[] = [true, false];

// classes
class Car {
}
const bmw: Car = new Car();

// object
const point: {x: number, y: number} = {
  x: 10,
  y: 20,
};

// functions
const logNumber: (i: number) => void = (i: number) => console.log(i);
