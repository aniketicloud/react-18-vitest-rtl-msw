export const sendNetworkRequest = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const user = await response.json();
  console.log(user);
};
