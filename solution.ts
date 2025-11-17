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

const getLength = <T>(values: T[] | string): number | undefined => {
  if (Array.isArray(values)) {
    return values.length;
  }
  if (typeof values === "string") return values.length;
};

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `'Name:${this.name}, Age:${this.age}'`;
  }
}

interface IProduct {
  title: string;
  rating: number;
}

const filterByRating = (products: IProduct[]): IProduct[] => {
  const result = products.filter((product: IProduct) => product.rating >= 4);
  return result;
};

interface IUser {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

const filterActiveUsers = (users: IUser[]): IUser[] => {
  const result = users.filter((user: IUser) => user.isActive === true);
  return result;
};

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (book: Book): void => {
  console.log(
    `Title: ${book.title}, Author: ${book.author}, Published: ${
      book.publishedYear
    }, Available: ${book.isAvailable ? "Yes" : "No"}`
  );
};

type TUniqueValues = string | number;

const getUniqueValues = (
  values1: TUniqueValues[],
  values2: TUniqueValues[]
): TUniqueValues[] => {
  const result: TUniqueValues[] = [];
  let i,
    j,
    idx = 0;

  for (i = 0; i < values1.length; i++) {
    let exists = false;
    for (j = 0; j < idx; j++) {
      if (result[j] === values1[i]) {
        exists = true;
        break;
      }
    }
    if (!exists) {
      result[idx++] = values1[i];
    }
  }

  for (i = 0; i < values2.length; i++) {
    let exists = false;
    for (j = 0; j < idx; j++) {
      if (result[j] === values2[i]) {
        exists = true;
        break;
      }
    }
    if (!exists) {
      result[idx++] = values2[i];
    }
  }

  return result;
};

type TProduct = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

const calculateTotalPrice = (products: TProduct[]): number => {
  if (products.length === 0) {
    return 0;
  }

  const total = products.reduce((acc: number, product: TProduct) => {
    const discount = product.discount ?? 0; // treat undefined as 0
    const priceAfterDiscount = product.price * (1 - discount / 100);
    return acc + product.quantity * priceAfterDiscount;
  }, 0);

  return total;
};
