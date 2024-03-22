import React, { useEffect, useState } from "react";
import VanCard from "../../components/vanCard/VanCard";

const Vans = () => {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const vansList = vans.map((van) => <VanCard van={van} key={van.id} />);

  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="van-list">{vansList}</div>
    </div>
  );
};

export default Vans;
