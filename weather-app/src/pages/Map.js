import TurkeyMap from "turkey-map-react";
import { useNavigate } from "react-router-dom";

function Map() {
  const navigate = useNavigate();

  const handleClick = (city) => {
    navigate(`/${city}`);
  };

  const handleClickHome = () => {
    navigate("/");
  };

  return (
    <div>
      <div className="flex justify-center text-violet-800 text-6xl mt-2">
        Search City on map
      </div>
      <div className="flex justify-center text-white mt-5">
        <button
          className="border border-gray-200 p-2 rounded-sm bg-violet-800 hover:bg-violet-500"
          onClick={() => handleClickHome()}
        >
          Go Homepage.
        </button>
      </div>
      <TurkeyMap
        onClick={({ name }) => handleClick(name)}
        showTooltip={true}
        customStyle={{
          idleColor: "#444",
          hoverColor: "#937DC2",
        }}
      />
    </div>
  );
}

export default Map;
