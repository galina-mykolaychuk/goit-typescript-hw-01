// generics/1.ts

import axios from "axios";

async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await axios.get<T>(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}

// Приклад виклику для тестування функції
async function testFetchData() {
  const url = "https://jsonplaceholder.typicode.com/todos/1";
  const data = await fetchData<{
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }>(url);
  console.log(data);
}

testFetchData();
