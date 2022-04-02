import "./Centre.scss";
import SeatchIcon from "../../Lib/Icons/Navbar/search.png";
import { IconButton } from "@mui/material";
const Centre = () => {
  return (
    <>
      <input
        className="search__input"
        placeholder="Search"
        type="text"
        name="input"
        id="searchInput"
      />
      <IconButton className="search__label">
        <img src={SeatchIcon} alt="icon" />
      </IconButton>
    </>
  );
};
export default Centre;
