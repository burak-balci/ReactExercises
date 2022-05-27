function Searchbar(props) {
  return (
    <div className="flex justify-center">
      <input
        placeholder="Search Pokemon"
        className="w-1/2 p-2 text-sm text-gray-900 bg-gray-200 rounded-lg focus:border-blue-400 border outline-0"
        onChange={props.handleChange}
      ></input>
    </div>
  );
}

export default Searchbar;
