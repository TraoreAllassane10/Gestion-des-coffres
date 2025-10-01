import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Coffre = () => {
  const { id } = useParams();

  const [solde, setSolde] = useState(0);
  const [depot, setDepot] = useState();
  const [retrait, setRetrait] = useState();

  useEffect(() => {
    setSolde(parseInt(localStorage.getItem(id)));
  });

  const garder = () => {
    if (!depot == "") {
      let soldeActuel = localStorage.getItem(id);

      let nouveauSolde = parseInt(soldeActuel) + parseInt(depot);

      localStorage.setItem(id, nouveauSolde);

      setDepot(0);
    }
  };

  const recuperer = () => {
    if (!retrait == "") {
      let soldeActuel = localStorage.getItem(id);

      if (parseInt(retrait) <= parseInt(soldeActuel)) {
        let nouveauSolde = parseInt(soldeActuel) - parseInt(retrait);
        localStorage.setItem(id, nouveauSolde);
      }

      setRetrait(0);
    }
  };

  return (
    <div className="max-w-2xl mx-auto my-16 bg-white rounded-md">
      <div className="px-10 py-2">
        <a href="/" className=" bg-red-500  text-white rounded p-1">
          Home
        </a>
      </div>
      <div className="p-10 flex flex-col gap-6 items-center justify-center">
        <h1 className="text-2xl text-gray-800 text-center">{id}</h1>
        <p className="text-2xl text-gray-800 text-center">
          {solde.toLocaleString("fr-FR", {
            style: "currency",
            currency: "XOF",
          })}
        </p>

        <div className="flex gap-6">
          <div className="space-x-2">
            <input
              type="number"
              value={depot}
              onChange={(e) => setDepot(e.target.value)}
              className="bg-gray-300 text-black"
            />
            <a
              onClick={garder}
              className="bg-indigo-500 p-2 rounded-md cursor-pointer"
            >
              Garder
            </a>
          </div>

          <div className="space-x-2">
            <input
              type="number"
              value={retrait}
              onChange={(e) => setRetrait(e.target.value)}
              className="bg-gray-300 text-black"
            />
            <a
              onClick={recuperer}
              className="bg-indigo-500 p-2 rounded-md cursor-pointer"
            >
              Récuperer
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coffre;
