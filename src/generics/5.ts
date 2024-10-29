// generics/5.ts

export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

// Використовуємо Record для створення RoleDescription
const RoleDescription: Record<UserRole, string> = {
  [UserRole.admin]: "Admin User",
  [UserRole.editor]: "Editor User",
  [UserRole.guest]: "Guest User",
};

// Приклад використання
console.log(RoleDescription[UserRole.admin]); // Виведе: Admin User
console.log(RoleDescription[UserRole.editor]); // Виведе: Editor User
console.log(RoleDescription[UserRole.guest]); // Виведе: Guest User
