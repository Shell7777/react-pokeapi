import './../../styles/header.css';
const Header = () => {
  //const img = '/src/assets/Pokemon-Logo-650x366.png';
  const img =
    'https://logos-marcas.com/wp-content/uploads/2020/05/Pokemon-Logo-650x366.png';
  return (
    <div id="header-content">
      <img id="header-img" alt="no-data" src={img}></img>
    </div>
  );
};

export default Header;
