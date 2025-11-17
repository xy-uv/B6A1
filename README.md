# Interview Questions - Blog Task (বাংলায় লেখা হলো-)

**_প্রশ্ন-১ঃ_** _What are some differences between interfaces and types in TypeScript?_

**_উত্তরঃ_** TypeScript-এ interfaces এবং types এর মধ্যে কিছু গুরুত্বপূর্ণ পার্থক্য রয়েছে:

1. **Declaration**: Interface গুলোকে `interface` কীওয়ার্ড দিয়ে ডিক্লেয়ার করা হয়, যেখানে type গুলোকে `type` কীওয়ার্ড দিয়ে ডিক্লেয়ার করা হয়।

2. **Extensibility**: Interface গুলো একাধিকবার ডিক্লেয়ার করা যায় এবং এদেরকে এক্সটেন্ড করেও ব্যাবহার করা যায় (যেমনঃ OOP এর ইনহেরিটেন্স তেমন, অন্যরের বৈশিষ্ট্য বা রুপকে ইনহেরিট করতে পারে নিজের মধ্যে), যেখানে type গুলো একবার ডিক্লেয়ার করার পর আর ডিক্লেয়ার করা যায় না।

3. **Capabilities**: Interface গুলো শুধুমাত্র অবজেক্টের স্ট্রাকচার ডিফাইন করতে পারে, যেখানে type গুলো ইউনিয়ন, টুপল, প্রিমিটিভ টাইপ ইত্যাদি ডিফাইন করতে পারে।

4. **Merging**: Interface গুলো মার্জ করা যায়, অর্থাৎ একই নামের ইন্টারফেস একাধিকবার ডিক্লেয়ার করলে তা মার্জ হয়ে যায়, কিন্তু type গুলো মার্জ করা যায় না।

5. **Use Cases**: Interface গুলো সাধারণত অবজেক্টের স্ট্রাকচার ডিফাইন করার জন্য ব্যবহৃত হয়, যেখানে type গুলো বিভিন্ন ধরনের বা যেকোন ধরনের ডাটা টাইপ ডিফাইন করার জন্য ব্যবহৃত হয়।

6. **Performance**: TypeScript কম্পাইলারে ইন্টারফেসের তুলনায় টাইপের পারফরম্যান্স কিছুটা ভালো হইতে পারে, কারণ টাইপগুলো কম্পাইল টাইমে আরও অপ্টিমাইজ করা সম্ভব।

**_প্রশ্ন-২ঃ_** _What is the use of the keyof keyword in TypeScript? Provide an example._

**_উত্তরঃ_** `keyof` কীওয়ার্ডটি TypeScript-এ একটি টাইপ অপারেটর যা একটি অবজেক্ট টাইপের সমস্ত কী (property names) এর ইউনিয়ন টাইপ রিটার্ন করে। এটি অবজেক্টের প্রপার্টি নামগুলোকে টাইপ হিসেবে ব্যবহার করার জন্য খুবই উপকারী।

**উদাহরণঃ**

```typescript
interface Person {
  name: string;
  age: number;
  address: string;
}
type PersonKeys = keyof Person; // "name" | "age" |"address"
```

এখানে, `PersonKeys` টাইপটি `Person` ইন্টারফেসের সমস্ত কী এর ইউনিয়ন টাইপ রিটার্ন করবে, অর্থাৎ `"name" | "age" | "address"`।

`keyof` কীওয়ার্ডটি ডাইনামিক প্রোগ্রামিং এবং টাইপ সেফটি নিশ্চিত করার জন্য খুবই কার্যকরী। এটি ডেভেলপারদেরকে অবজেক্টের প্রপার্টি নামগুলোকে টাইপ হিসেবে ব্যবহার করতে সাহায্য করে, যা কোডের রিডেবিলিটি এবং মেইনটেনেন্স উন্নত করে।

**_প্রশ্ন-৩ঃ_** _Provide an example of using union and intersection types in TypeScript._

**_উত্তরঃ_** TypeScript-এ ইউনিয়ন এবং ইন্টারসেকশন টাইপ ব্যবহার করার উদাহরণ নিচে দেওয়া হলো:
**ইউনিয়ন টাইপ (Union Type) উদাহরণঃ**

```typescript
type StringOrNumber = string | number;

function displayValue(value: StringOrNumber) {
  if (typeof value === "string") {
    console.log("String value: " + value);
  } else {
    console.log("Number value: " + value);
  }
}
displayValue("Hello"); // Output: String value: Hello
displayValue(42); // Output: Number value: 42
```

**ইন্টারসেকশন টাইপ (Intersection Type) উদাহরণঃ**

```typescript
interface Person {
  name: string;
  age: number;
}
interface Employee {
  employeeId: number;
  department: string;
}
type EmployeePerson = Person & Employee;

const employeePerson: EmployeePerson = {
  name: "John Doe",
  age: 30,
  employeeId: 12345,
  department: "Engineering",
};
console.log(employeePerson);
```

উপরের উদাহরণে, `StringOrNumber` একটি ইউনিয়ন টাইপ যা একটি ভেরিয়েবলকে string অথবা number হতে পারে। `EmployeePerson` একটি ইন্টারসেকশন টাইপ যা `Person` এবং `Employee` ইন্টারফেসের সমস্ত প্রপার্টি ধারণ করে।
