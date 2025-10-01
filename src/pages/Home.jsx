import etudes from "../../public/images/bourse-detudes.png";
import business from "../../public/images/business-case.png";
import facture from "../../public/images/facture-dachat.png";
import fete from "../../public/images/fete.png";
import tontine from "../../public/images/plan-depargne.png";
import voyage from "../../public/images/sac-de-voyage.png";
import sante from "../../public/images/sante.png";

const Home = () => {
  return (
    <div className="max-w-2xl mx-auto py-16">
      <h1 className="text-2xl font-bold mb-6">Mes Coffres</h1>

      <div className="text-center mb-6">
        <h2>Soldes Total des coffres</h2>
        <span>0F</span>
      </div>

      {/* Section Coffres */}
      <div>
        <div className="bg-white border-gray-400 rounded flex mb-4">
          <div className="p-2 bg-indigo-500 w-[130px] flex items-center justify-center rounded-l">
            <img src={etudes} width={90} height={90} />
          </div>

          <div className="px-4 flex items-center justify-between text-gray-800 w-full text-xl">
            <p>Etudes</p>
            <p>0F</p>
          </div>
        </div>

        <div className="bg-white border-gray-400 rounded flex mb-4">
          <div className="p-2 bg-green-500 w-[130px] flex items-center justify-center rounded-l">
            <img src={business} width={90} height={90} />
          </div>

          <div className="px-4 flex items-center justify-between text-gray-800 w-full text-xl">
            <p>Business</p>
            <p>0F</p>
          </div>
        </div>

        <div className="bg-white border-gray-400 rounded flex mb-4">
          <div className="p-2 bg-yellow-500 w-[130px] flex items-center justify-center rounded-l">
            <img src={facture} width={90} height={90} />
          </div>

          <div className="px-4 flex items-center justify-between text-gray-800 w-full text-xl">
            <p>Facture</p>
            <p>0F</p>
          </div>
        </div>

        <div className="bg-white border-gray-400 rounded flex mb-4">
          <div className="p-2 bg-red-500 w-[130px] flex items-center justify-center rounded-l">
            <img src={fete} width={90} height={90} />
          </div>

          <div className="px-4 flex items-center justify-between text-gray-800 w-full text-xl">
            <p>Fête</p>
            <p>0F</p>
          </div>
        </div>

        <div className="bg-white border-gray-400 rounded flex mb-4">
          <div className="p-2 bg-purple-500 w-[130px] flex items-center justify-center rounded-l">
            <img src={tontine} width={90} height={90} />
          </div>

          <div className="px-4 flex items-center justify-between text-gray-800 w-full text-xl">
            <p>Tontine</p>
            <p>0F</p>
          </div>
        </div>

        <div className="bg-white border-gray-400 rounded flex mb-4">
          <div className="p-2 bg-cyan-500 w-[130px] flex items-center justify-center rounded-l">
            <img src={voyage} width={90} height={90} />
          </div>

          <div className="px-4 flex items-center justify-between text-gray-800 w-full text-xl">
            <p>Voyage</p>
            <p>0F</p>
          </div>
        </div>

        <div className="bg-white border-gray-400 rounded flex mb-4">
          <div className="p-2 bg-orange-500 w-[130px] flex items-center justify-center rounded-l">
            <img src={sante} width={90} height={90} />
          </div>

          <div className="px-4 flex items-center justify-between text-gray-800 w-full text-xl">
            <p>Santé</p>
            <p>0F</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
