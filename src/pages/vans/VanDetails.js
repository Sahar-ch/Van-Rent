import { Link, useLoaderData, useLocation } from "react-router-dom";
import { getVanById } from "../../api";

export function loader({ params }) {
  return getVanById(params.id);
}

const VanDetails = () => {
  const van = useLoaderData();
  const location = useLocation();
  const { filteredType, search } = location.state;

  return (
    <div className="van-detail-container">
      <Link to={`..?${search}`} relative="path" className="back-button">
        &larr;<span>{`back to ${filteredType || "all"} vans`}</span>
      </Link>
      {van ? (
        <div className="van-detail">
          <img src={van.imageUrl} />
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
          <h2>{van.name}</h2>
          <p className="van-price">
            <span>${van.price}</span>/day
          </p>
          <p>{van.description}</p>
          <button className="link-button">Rent this van</button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default VanDetails;
