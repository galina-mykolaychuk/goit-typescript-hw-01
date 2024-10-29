// generics/6.ts

type Errors = {
  email?: string[];
  firstName?: string[];
  lastName?: string[];
  phone?: string[];
};

type Form = {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  errors: Errors;
};

// Використовуємо Omit для створення Params без поля 'errors'
type Params = Omit<Form, "errors">;

// Приклад використання
const params: Params = {
  email: "user@example.com",
  firstName: "John",
  lastName: "Doe",
  phone: "123-456-7890",
  // errors: {} // Це поле не повинно бути тут
};

console.log(params);
