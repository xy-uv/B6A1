type TValue = number | string | boolean;

const formatValue = (value: TValue): TValue => {
  if (typeof value === "number") {
    return value * 10;
  } else if (typeof value === "string") {
    return value.toUpperCase();
  } else {
    return !value;
  }
};
// console.log(formatValue("fuck you"));
// console.log(formatValue(7));
// console.log(formatValue(false));

const getLength = <T>(values: T[] | string): number | undefined => {
  if (Array.isArray(values)) {
    return values.length;
  }
  if (typeof values === "string") return values.length;
};
// console.log(getLength("typescript"));
// console.log(getLength([10, 20, 30, 40]));

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `'Name:${this.name}, Age:${this.age}'`;
  }
}

// const person1 = new Person("John Doe", 30);
// console.log(person1.getDetails());

// const person2 = new Person("Alice", 25);
// console.log(person2.getDetails());
