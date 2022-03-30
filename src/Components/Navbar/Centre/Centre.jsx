import "./Centre.scss";
import SeatchIcon from "../../Lib/Icons/Navbar/search.png";
const Centre = () => {
  return (
    <div className="navbar__centre">
      <input
        className="search__input"
        placeholder="Search"
        type="text"
        name="input"
        id="searchInput"
      />
      <label className="search__label" htmlFor="searchInput">
        <img src={SeatchIcon} alt="icon" />
      </label>
    </div>
  );
};
export default Centre;
