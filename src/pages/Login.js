import React, { useState } from "react";
import { useLoaderData, Form, redirect, useActionData } from "react-router-dom";
import { loginUser } from "../api";

export function loader({ request }) {
  return new URL(request.url).searchParams.get("message");
}

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const data = await loginUser({ email, password });
  // console.log(data);
  if (data.token) {
    localStorage.setItem("isLoggedIn", true);
    const response = redirect("/host");
    response.body = true;
    return response;
  }
  return data;
}

export default function Login() {
  const error = useActionData();
  const data = useLoaderData();
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn")
  );

  function logOutHandler() {
    localStorage.setItem("isLoggedIn", false);
    setIsLoggedIn(false);
  }

  return (
    <>
      {!isLoggedIn ? (
        <div className="login-container">
          <h1>Sign in to your account</h1>
          <h2 className="red">{data || error}</h2>
          <Form method="post" className="login-form" replace>
            <input name="email" type="email" placeholder="Email address" />
            <input name="password" type="password" placeholder="Password" />
            <button>Log in</button>
          </Form>
        </div>
      ) : (
        <button onClick={logOutHandler}>Log Out</button>
      )}{" "}
    </>
  );
}
