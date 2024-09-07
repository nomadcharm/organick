import { FC } from "react";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";
import { cart, logo, search } from "../../assets/img/assets";
import "./Header.scss";

const Header: FC = () => {
  return (
    <header className="header">
      <div className="container header__container">
        <Link className="header__logo" to={'/'}>
          <img src={logo} alt="Organick" />
        </Link>

        <nav className="header__nav nav">
          <ul className="nav__list">
            <li className="nav__item">
              <Link className="nav__link" to={"/"}>Home</Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link" to={"/about"}>About</Link>
            </li>
            <li className="nav__item">
              <select className="nav__link nav__select" id="">
                <option value="">Pages</option>
              </select>
            </li>
            <li className="nav__item">
              <Link className="nav__link" to={"/shop"}>Shop</Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link" to={"/portfolio"}>Projects</Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link" to={"/blog"}>News</Link>
            </li>
          </ul>
        </nav>

        <div className="header__search-bar search-bar">
          <input className="search-bar__input" type="text" />
          <button className="search-bar__button">
            <ReactSVG src={search} />
          </button>
        </div>

        <div className="header__cart cart">
          <div className="cart__logo">
            <ReactSVG src={cart} />
          </div>
          <p className="cart__title">
            Cart <span className="cart__quantity">(0)</span>
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
