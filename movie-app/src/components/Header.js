import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="bg-gray-700 top-0 sticky z-10">
      <div className="flex p-3 w-3/4 mx-auto text-yellow-400 justify-center">
        <div className="flex items-center">
          <div className="font-bold text-4xl items-center mr-10">
            <Link to="/">TMDB</Link>
          </div>
          <div className="flex space-x-5">
            <Link to="/">Popular</Link>
            <Link to="/">Top Rated</Link>
            <Link to="/">Now Playing</Link>
            <Link to="/">Up Coming</Link>
          </div>
          <div className="flex ml-56 items-center">
            <input
              placeholder="Search Movies..."
              className="p-1 rounded-sm w-80 outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
