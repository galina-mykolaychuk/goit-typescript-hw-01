// generics/2.ts

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

// Pick для визначення типів параметрів функції
function compare<
  T extends Pick<AllType, "name" | "color">,
  U extends Pick<AllType, "position" | "weight">
>(top: T, bottom: U): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

// Приклад виклику функції compare
const obj1 = { name: "Apple", color: "Red" };
const obj2 = { position: 1, weight: 150 };

const result = compare(obj1, obj2);
console.log(result); // { name: 'Apple', color: 'Red', position: 1, weight: 150 }
