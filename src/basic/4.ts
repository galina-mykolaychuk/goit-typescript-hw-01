// basic/4.ts

// Функція приймає рядок як аргумент і нічого не повертає (тип `void`)
function showMessage(message: string): void {
  console.log(message);
}

// Функція приймає два числа як аргументи і повертає число
function calc(num1: number, num2: number): number {
  return num1 + num2;
}

// Функція не приймає аргументів, але завжди кидає помилку (тип `never`)
function customError(): never {
  throw new Error("Error");
}
