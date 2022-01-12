export interface listOfNumbers {
  items: number[];
}

export interface listOfStrings {
  items: string[];
}

export interface listOfAnything<T> {
  items: T[];
}

function showNumbers(items: listOfNumbers) {}

function showStrings(items: listOfStrings) {}

function showAnything<T>(items: listOfAnything<T>) {}

const items = { items: ['asd', 'fdas'] };
showAnything<string>(items);
