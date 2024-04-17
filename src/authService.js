import { redirect } from "react-router-dom";

export async function requiredAuth() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  if (!isLoggedIn) {
    const response = redirect("/login?message=You must login first");
    response.body = true;
    throw response;
  }
}
