import React, { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";

const HostVansDetails = () => {
  const { id } = useParams();
  const [currentVan, setCurrentVan] = useState(null);

  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setCurrentVan(data.vans));
  }, []);

  return (
    <div>
      {currentVan ? (
        <section>
          {/* normally the hirarchy routes are the default routes for routing but when we use relative="path" it means
          instead of using general routing we refer to the url path to based on change the route. */}
          <Link to=".." relative="path" className="back-button">
            &larr; <span>Back to all vans</span>
          </Link>

          <div className="host-van-detail-layout-container">
            <div className="host-van-detail">
              <img src={currentVan.imageUrl} />
              <div className="host-van-detail-info-text">
                <i className={`van-type van-type-${currentVan.type}`}>
                  {currentVan.type}
                </i>
                <h3>{currentVan.name}</h3>
                <h4>${currentVan.price}/day</h4>
              </div>
            </div>
          </div>
          <nav className="host-van-detail-nav">
            <NavLink
              to="."
              style={({ isActive }) => (isActive ? activeStyle : null)}
              end
            >
              Details
            </NavLink>
            <NavLink
              to="pricing"
              style={({ isActive }) => (isActive ? activeStyle : null)}
            >
              Pricing
            </NavLink>
            <NavLink
              to="photos"
              style={({ isActive }) => (isActive ? activeStyle : null)}
            >
              Photos
            </NavLink>
          </nav>
          {/*by using context in Outlet we can pass the already fetched data
           to the all children by do so we are not required to request the
          server to fetch data again and avoid redundancy*/}
          <Outlet context={{ currentVan }} />
        </section>
      ) : (
        <h1>...loading</h1>
      )}
    </div>
  );
};

export default HostVansDetails;
