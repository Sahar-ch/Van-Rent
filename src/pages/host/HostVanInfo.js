import React from "react";
import { useOutletContext } from "react-router-dom";

const HostVanInfo = () => {
  const { currentVan } = useOutletContext();
  return (
    <section className="host-van-detail-info">
      <h4>
        name:<span>{currentVan.name}</span>
      </h4>
      <h4>
        category:<span>{currentVan.type}</span>
      </h4>
      <h4>
        description:<span>{currentVan.description}</span>
      </h4>
      <h4>
        visibility:<span>public</span>
      </h4>
    </section>
  );
};

export default HostVanInfo;
