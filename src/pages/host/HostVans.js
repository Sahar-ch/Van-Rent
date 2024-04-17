import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getHostVans } from "../../api";
import { requiredAuth } from "../../authService";

export async function loader() {
  await requiredAuth();
  return getHostVans("123");
}

const HostVans = () => {
  const hostVans = useLoaderData();
  const hostVansList = hostVans.map((van) => {
    return (
      <Link
        to={`/host/vans/${van.id}`}
        key={van.id}
        className="host-van-link-wrapper"
      >
        <div className="host-van-single" key={van.id}>
          <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
          <div className="host-van-info">
            <h3>{van.name}</h3>
            <p>${van.price}/day</p>
          </div>
        </div>
      </Link>
    );
  });
  return (
    <section>
      <h1 className="host-vans-title">Your listed vans</h1>
      <div className="host-vans-list">
        {hostVansList.length > 0 ? (
          <section>{hostVansList}</section>
        ) : (
          <h2>...loading</h2>
        )}
      </div>
    </section>
  );
};

export default HostVans;
