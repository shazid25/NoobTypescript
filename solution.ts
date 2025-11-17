export function formatValue(value: string | number | boolean): string | number | boolean {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  if (typeof value === "number") {
    return value * 10;
  }
  return !value;
}

export function getLength(value: string | any[]): number {
  if (typeof value === "string") {
    return value.length;
  }
  if (Array.isArray(value)) {
    return value.length;
  }
  return 0;
}

export class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

export function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  return items.filter((item) => item.rating >= 4);
}

export function filterActiveUsers(
  users: { id: number; name: string; email: string; isActive: boolean }[]
): { id: number; name: string; email: string; isActive: boolean }[] {
  return users.filter((user) => user.isActive === true);
}

export interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

export function printBookDetails(book: Book): string {
  const availableText = book.isAvailable ? "Yes" : "No";
  return `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availableText}`;
}

export function getUniqueValues(
  arr1: (string | number)[],
  arr2: (string | number)[]
): (string | number)[] {
  const result: (string | number)[] = [];

  for (const item of arr1) {
    if (!result.includes(item)) {
      result.push(item);
    }
  }

  for (const item of arr2) {
    if (!result.includes(item)) {
      result.push(item);
    }
  }

  return result;
}

export function calculateTotalPrice(
  products: {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
  }[]
): number {
  if (products.length === 0) return 0;

  return products
    .map((product) => {
      let total = product.price * product.quantity;
      if (product.discount) {
        total = total - total * (product.discount / 100);
      }
      return total;
    })
    .reduce((sum, current) => sum + current, 0);
}