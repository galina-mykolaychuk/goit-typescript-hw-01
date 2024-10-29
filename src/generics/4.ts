// generics/4.ts

// Оскільки ми вже оголосили тип User в іншому файлі (src/basic/6.ts), в нас виникає помилка повторюючийся ідентифікатор "User". Через це ми перейменували  User на UserUpdate

type UserUpdate = {
  name?: string;
  surname?: string;
  email?: string;
  password?: string;
};

function createOrUpdateUser(initialValues: UserUpdate) {
  // Оновлення користувача
  console.log("User data:", initialValues);
}

createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});
