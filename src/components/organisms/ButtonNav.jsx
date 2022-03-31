import './../../styles/ButtonNav.css';
const ButtonNav = ({ onClickNext, onClickPrevius }) => {
  return (
    <div className="main-button">
      <button onClick={onClickPrevius} className="btn btn-primary">
        Previus
      </button>
      <button onClick={onClickNext} className="btn btn-primary">
        Next
      </button>
    </div>
  );
};
export default ButtonNav;
