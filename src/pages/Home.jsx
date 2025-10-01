import { useEffect, useState } from "react";
import etudes from "../../public/images/bourse-detudes.png";
import bus from "../../public/images/business-case.png";
import fact from "../../public/images/facture-dachat.png";
import fet from "../../public/images/fete.png";
import ton from "../../public/images/plan-depargne.png";
import voy from "../../public/images/sac-de-voyage.png";
import sant from "../../public/images/sante.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [etude, setEtude] = useState(0);
  const [business, setBusiness] = useState(0);
  const [facture, setFacture] = useState(0);
  const [fete, setFete] = useState(0);
  const [tontine, setTontine] = useState(0);
  const [voyage, setVoyage] = useState(0);
  const [sante, setSante] = useState(0);

  const [total, setTotal] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    if (
      !localStorage.getItem("etude") ||
      !localStorage.getItem("business") ||
      !localStorage.getItem("facture") ||
      !localStorage.getItem("fete") ||
      !localStorage.getItem("tontine") ||
      !localStorage.getItem("voyage") ||
      !localStorage.getItem("sante")
    ) {
      localStorage.setItem("etude", 0);
      localStorage.setItem("business", 0);
      localStorage.setItem("facture", 0);
      localStorage.setItem("fete", 0);
      localStorage.setItem("tontine", 0);
      localStorage.setItem("voyage", 0);
      localStorage.setItem("sante", 0);
    } else {
      setEtude(parseInt(localStorage.getItem("etude")));
      setBusiness(parseInt(localStorage.getItem("business")));
      setFacture(parseInt(localStorage.getItem("facture")));
      setFete(parseInt(localStorage.getItem("fete")));
      setTontine(parseInt(localStorage.getItem("tontine")));
      setVoyage(parseInt(localStorage.getItem("voyage")));
      setSante(parseInt(localStorage.getItem("sante")));

      let soldeTotal =
        parseInt(localStorage.getItem("etude")) +
        parseInt(localStorage.getItem("business")) +
        parseInt(localStorage.getItem("facture")) +
        parseInt(localStorage.getItem("fete")) +
        parseInt(localStorage.getItem("tontine")) +
        parseInt(localStorage.getItem("voyage")) +
        parseInt(localStorage.getItem("sante"));

      setTotal(soldeTotal);
    }
  }, []);

  return (
    <div className="max-w-2xl mx-auto py-16">
      <h1 className="text-2xl font-bold mb-6">Mes Coffres</h1>

      <div className="text-center mb-6">
        <h2 className="text-xl font-medium">Soldes Total des coffres</h2>
        <span className="text-xl">{total.toLocaleString("fr-FR", {style: "currency", currency: "XOF"})}</span>
      </div>

      {/* Section Coffres */}
      <div>
        <a
          href="/coffres/etude"
          className="bg-white border-gray-400 rounded flex mb-4"
        >
          <div className="p-2 bg-indigo-500 w-[130px] flex items-center justify-center rounded-l">
            <img src={etudes} width={90} height={90} />
          </div>

          <div className="px-4 flex items-center justify-between text-gray-800 w-full text-xl">
            <p>Etudes</p>
            <p>{etude.toLocaleString("fr-FR", {style: "currency", currency: "XOF"})}</p>
          </div>
        </a>

        <a
          href="/coffres/business"
          className="bg-white border-gray-400 rounded flex mb-4"
        >
          <div className="p-2 bg-green-500 w-[130px] flex items-center justify-center rounded-l">
            <img src={bus} width={90} height={90} />
          </div>

          <div className="px-4 flex items-center justify-between text-gray-800 w-full text-xl">
            <p>Business</p>
            <p>{business.toLocaleString("fr-FR", {style: "currency", currency: "XOF"})}</p>
          </div>
        </a>

        <a
          href="/coffres/facture"
          className="bg-white border-gray-400 rounded flex mb-4"
        >
          <div className="p-2 bg-yellow-500 w-[130px] flex items-center justify-center rounded-l">
            <img src={fact} width={90} height={90} />
          </div>

          <div className="px-4 flex items-center justify-between text-gray-800 w-full text-xl">
            <p>Facture</p>
            <p>{facture.toLocaleString("fr-FR", {style: "currency", currency: "XOF"})}</p>
          </div>
        </a>

        <a
          href="/coffres/fete"
          className="bg-white border-gray-400 rounded flex mb-4"
        >
          <div className="p-2 bg-red-500 w-[130px] flex items-center justify-center rounded-l">
            <img src={fet} width={90} height={90} />
          </div>

          <div className="px-4 flex items-center justify-between text-gray-800 w-full text-xl">
            <p>Fête</p>
            <p>{fete.toLocaleString("fr-FR", {style: "currency", currency: "XOF"})}</p>
          </div>
        </a>

        <a
          href="/coffres/tontine"
          className="bg-white border-gray-400 rounded flex mb-4"
        >
          <div className="p-2 bg-purple-500 w-[130px] flex items-center justify-center rounded-l">
            <img src={ton} width={90} height={90} />
          </div>

          <div className="px-4 flex items-center justify-between text-gray-800 w-full text-xl">
            <p>Tontine</p>
            <p>{tontine.toLocaleString("fr-FR", {style: "currency", currency: "XOF"})}</p>
          </div>
        </a>

        <a
          href="/coffres/voyage"
          className="bg-white border-gray-400 rounded flex mb-4"
        >
          <div className="p-2 bg-cyan-500 w-[130px] flex items-center justify-center rounded-l">
            <img src={voy} width={90} height={90} />
          </div>

          <div className="px-4 flex items-center justify-between text-gray-800 w-full text-xl">
            <p>Voyage</p>
            <p>{voyage.toLocaleString("fr-FR", {style: "currency", currency: "XOF"})}</p>
          </div>
        </a>

        <a
          href="/coffres/sante"
          className="bg-white border-gray-400 rounded flex mb-4"
        >
          <div className="p-2 bg-orange-500 w-[130px] flex items-center justify-center rounded-l">
            <img src={sant} width={90} height={90} />
          </div>

          <div className="px-4 flex items-center justify-between text-gray-800 w-full text-xl">
            <p>Santé</p>
            <p>{sante.toLocaleString("fr-FR", {style: "currency", currency: "XOF"})}</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Home;
