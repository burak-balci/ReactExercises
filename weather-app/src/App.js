import data from "./data/cities.json";
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { useNavigate } from "react-router-dom";
import { setIsActive } from "./redux/citiesSlice";

function App() {
  const { isActive } = useSelector((state) => state.cities);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onClickCities = () => {
    navigate("/");
    dispatch(setIsActive());
  };
  const onClickMap = () => {
    navigate("/map");
  };
  const handleClick = (city) => {
    navigate(`/${city}`);
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <div className="flex my-10 border-2 p-2 bg-neutral-900 border-neutral-900 rounded-full">
        <button
          className={`p-2 text-lg rounded-l-full hover:bg-violet-500 w-32 text-white  ${
            isActive ? "bg-violet-800" : "bg-neutral-900"
          }`}
          onClick={() => onClickCities()}
        >
          Cities
        </button>
        <button
          className="p-2 text-lg rounded-r-full hover:bg-violet-500 w-32 text-white 
            bg-neutral-900
          "
          onClick={() => onClickMap()}
        >
          Map
        </button>
      </div>
      <div className="flex flex-wrap gap-x-5 gap-y-5 w-4/5 mx-auto">
        {data.map((city) => (
          <div key={city.id}>
            <button
              onClick={() => handleClick(city.name)}
              className="border border-gray-500 flex flex-row gap-x-10 p-3 text-lg rounded-full hover:bg-violet-500 w-72 text-white items-center"
            >
              <div className="bg-violet-800 py-2 rounded-full px-4">
                {city.id}
              </div>
              <div>{city.name}</div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
