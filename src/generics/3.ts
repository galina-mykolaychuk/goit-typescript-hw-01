// generics/3.ts

function merge<T extends object, U extends object>(objA: T, objB: U): T & U {
  return Object.assign({}, objA, objB);
}

// Приклад використання функції merge
const mergedObj = merge({ name: "Max" }, { age: 30 });
console.log(mergedObj); // { name: 'Max', age: 30 }

// Приклад з різними типами
const mergedObj2 = merge({ title: "Developer" }, { experience: 5 });
console.log(mergedObj2); // { title: 'Developer', experience: 5 }
