import React from "react";
import { useOutletContext } from "react-router-dom";

const HostVanPhotos = () => {
  const { currentVan } = useOutletContext();
  return <img className="host-van-detail-image" src={currentVan.imageUrl} />;
};

export default HostVanPhotos;
