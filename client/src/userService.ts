import { IUser } from './types';
const URL = "http://localhost:8080/users";

export async function getUsers(){
  const data = await fetch(URL);
  return await data.json();
}

export async function addUser(user) {
  await fetch(URL, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  });
}
