import React from "react";
import { useParams } from "react-router-dom";

const Coffre = () => {
  const { id } = useParams();

  return (
    <div className="max-w-2xl mx-auto my-16 bg-white">
      <p>Coffre</p>
    </div>
  );
};

export default Coffre;
