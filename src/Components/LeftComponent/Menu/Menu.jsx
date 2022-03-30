import "./Menu.scss";

import { NavLink } from "react-router-dom";
import {
  homeIcon,
  TrendIcon,
  SubIcon,
  LibraryIcon,
  HistoryIcon,
  WatchIcon,
  FavouritesIcon,
  LikedIcon,
  MusicIcon,
  GamesIcon,
  ShowMoreIcon,
} from "../../Lib/Icons/Menu/MenuIcons";

const Menu = () => {
  return (
    <div className="menu">
      <ul className="menu__list">
        <NavLink className="menu__item" to="/">
          <img className="menu__icons" src={homeIcon} alt="home" />
          Home
        </NavLink>

        <li className="menu__item">
          <img className="menu__icons" src={TrendIcon} alt="tend icon" />
          Trending
        </li>

        <li className="menu__item main__menu">
          <img className="menu__icons" src={SubIcon} alt="sub icon" />
          Subscriptions
        </li>

        <li className="menu__item ">
          <img className="menu__icons" src={LibraryIcon} alt="Library icon" />
          Library
        </li>

        <li className="menu__item ">
          <img className="menu__icons" src={HistoryIcon} alt="history icon" />
          History
        </li>

        <li className="menu__item ">
          <img className="menu__icons" src={WatchIcon} alt="history icon" />
          Watch later
        </li>

        <li className="menu__item ">
          <img
            className="menu__icons"
            src={FavouritesIcon}
            alt="Favourit icon"
          />
          Favourites
        </li>

        <li className="menu__item ">
          <img className="menu__icons" src={LikedIcon} alt="liked icon" />
          Liked videos
        </li>

        <li className="menu__item ">
          <img className="menu__icons" src={MusicIcon} alt="music icon" />
          Music
        </li>

        <li className="menu__item ">
          <img className="menu__icons" src={GamesIcon} alt="Games icon" />
          Games
        </li>

        <li className="menu__item ">
          <img
            className="menu__icons"
            src={ShowMoreIcon}
            alt="Show more icon"
          />
          Show more
        </li>
      </ul>
    </div>
  );
};

export default Menu;
