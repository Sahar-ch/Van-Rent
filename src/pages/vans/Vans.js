import React from "react";
import VanCard from "../../components/vanCard/VanCard";
import { useLoaderData, useSearchParams } from "react-router-dom";
import { getVans } from "../../api";

export function loader() {
  return getVans();
}

const Vans = () => {
  const vans = useLoaderData();

  const [searchParams, setSearchParams] = useSearchParams();
  const filteredType = searchParams.get("type");

  //filtering vans based on type
  const filteredVans = filteredType
    ? vans.filter((van) => van.type === filteredType)
    : vans;

  const vansList = filteredVans?.map((van) => (
    <VanCard van={van} key={van.id} filteredType={filteredType} />
  ));

  //concatenating different queries in the url using setter function
  function filterHandler(key, value) {
    setSearchParams((searchParams) => {
      if (value === null) {
        searchParams.delete(key);
      } else {
        searchParams.set(key, value);
      }
      return searchParams;
    });
  }

  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="van-list-filter-buttons">
        {/*filtering the url using setSearchParams*/}
        <button
          onClick={() => filterHandler("type", "luxury")}
          className="van-type luxury"
        >
          Luxury
        </button>
        <button
          onClick={() => filterHandler("type", "simple")}
          className="van-type simple"
        >
          Simple
        </button>
        <button
          onClick={() => filterHandler("type", "rugged")}
          className="van-type rugged"
        >
          Rugged
        </button>
        <button
          onClick={() => filterHandler("type", null)}
          className="van-type clear-filters"
        >
          Clear filter
        </button>
      </div>
      <div className="van-list">{vansList}</div>
    </div>
  );
};

export default Vans;
