import React from "react";
import { requiredAuth } from "../../authService";

export async function loader() {
  await requiredAuth();
  return null;
}

const Reviews = () => {
  return <div>This is Reviews.</div>;
};

export default Reviews;
