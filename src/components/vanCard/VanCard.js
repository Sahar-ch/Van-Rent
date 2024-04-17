import React from "react";
import { Link, useSearchParams } from "react-router-dom";

const VanCard = (props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);
  const van = props.van;
  return (
    <div className="van-tile">
      <Link
        to={van.id}
        state={{
          search: searchParams.toString(),
          filteredType: props.filteredType,
        }}
      >
        <img src={van.imageUrl} />
        <div className="van-info">
          <h3>{van.name}</h3>
          <p>
            ${van.price}
            <span>/day</span>
          </p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </Link>
    </div>
  );
};

export default VanCard;
