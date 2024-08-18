import { jsonplaceholderURL } from "constants/urls";
import { jsonplaceholderUser } from "types/types";

export const sendNetworkRequest = async (): Promise<jsonplaceholderUser> => {
  const response = await fetch(jsonplaceholderURL);
  const user: jsonplaceholderUser = await response.json();
  return user;
};
