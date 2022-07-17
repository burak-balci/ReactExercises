import { useParams } from "react-router-dom";
import data from "../data/cities.json";
import Timer from "../components/Timer";
import Card from "../components/Card";
import { useDispatch } from "react-redux";
import { setCity } from "../redux/citiesSlice";
import { useNavigate } from "react-router-dom";

function City() {
  const { city } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    dispatch(setCity(e.target.value));
    navigate(`/${e.target.value}`);
  };

  return (
    <div className="w-3/4 mx-auto flex flex-col mt-10">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <select
            onChange={(e) => handleChange(e)}
            className="font-bold text-violet-700 p-1 outline-none"
            defaultValue={city}
          >
            {data.map((city) => (
              <option
                key={city.id}
                value={city.name}
                className="font-bold text-violet-700"
              >
                {city.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex justify-center ml-16 items-center text-violet-400 font-bold text-2xl ">
          {city}
        </div>
        <div className="flex text-white">
          <Timer />
        </div>
      </div>
      <div className="mx-auto flex flex-wrap mt-20 justify-center gap-x-5">
        <Card city={city} />
      </div>
    </div>
  );
}

export default City;
