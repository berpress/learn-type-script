const add = (a: number, b: number): number => a + b;

console.log(add(1, 2));

function divide(a: number, b: number): number {
  return a / b;
}

console.log(divide(10, 2));

const logger = (message: string): void => console.log(message);

const forecast = {
  date: new Date(),
  weaher: 'sunny',
};

const logWeather = (forecats: {date: Date, weaher: string}): void => console.log(forecats);
const logWeatherTwo = ({ date, weaher }): void => console.log(`${date} and ${weaher}`);

const profile = {
  name: 'Jack',
  age: 22,
  coordinates: {
    x: 23,
    y: 100,
  },

  setAge(age: number): void {
    this.age = age;
  },
};

const { age } : {age:number} = profile.setAge(10);
