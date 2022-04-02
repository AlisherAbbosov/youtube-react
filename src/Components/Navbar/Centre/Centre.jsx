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
      <IconButton
        className="search__label"
        // color="primary"
        // sx={{ p: "10px" }}
        // aria-label="directions"
      >
        <img src={SeatchIcon} alt="icon" />
      </IconButton>
      {/* <label className="search__label" htmlFor="searchInput">
      </label> */}
    </>
  );
};
export default Centre;
