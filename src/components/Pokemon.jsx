import './../styles/Pokemon.css';
const Pokemon = ({ name, img, numberPokedex }) => {
  return (
    <div className="mycard">
      <img className="" src={img} alt="no-data"></img>
      <div className="">
        <b>{name}</b>
        <br></br>
        {numberPokedex}
      </div>
    </div>
  );
};

export default Pokemon;
