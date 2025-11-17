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
interface IProduct {
  title: string;
  rating: number;
}

const filterByRating = (products: IProduct[]) => {
  const result = products.filter((product: IProduct) => product.rating >= 4);
  return result;
};

// const books = [
//   { title: "Book A", rating: 4.5 },
//   { title: "Book B", rating: 3.2 },
//   { title: "Book C", rating: 5.0 },
//   { title: "Book D", rating: 4.0 },
//   { title: "Book E", rating: 3.99 },
//   { title: "Book F", rating: 4.1 },
// ];

// console.log(filterByRating(books));
