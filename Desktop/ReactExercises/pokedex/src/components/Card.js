function Card(props) {
  const type = props.data.types[0].type.name;
  return (
    <div
      className={`p-3 m-2 rounded-lg border ${
        type === "grass" && "!bg-green-600"
      } ${type === "fire" && "!bg-red-600"} ${
        type === "water" && "!bg-blue-600"
      } ${
        type === "bug" && "!bg-lime-700"
      } dark:bg-gray-800 dark:border-gray-700 justify-center`}
    >
      <h5 className="text-center mb-2 text-2xl font-bold tracking-tight text-gray-100">
        {props.data.name.charAt(0).toUpperCase() + props.data.name.slice(1)}
      </h5>
      <img
        src={`${Object.values(props.data.sprites.other)[2].front_default}`}
        alt={props.data.name}
      />
      <ul className="text-center text-gray-300">
        <li>Weight : {props.data.weight}</li>
        <li>
          Type :{" "}
          {props.data.types[0].type.name.charAt(0).toUpperCase() +
            props.data.types[0].type.name.slice(1)}
        </li>
      </ul>
    </div>
  );
}

export default Card;
