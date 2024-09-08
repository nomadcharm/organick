import { FC } from "react";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";
import { cart, logo, search } from "../../assets/img/assets";

const Header: FC = () => {
  return (
    <header className="pt-[69px] pb-[69px]">
      <div className="flex items-center w-full max-w-[1636px] mx-auto pl-[20px] pr-[20px]">
        <Link className="flex-shrink-0 mr-[150px]" to={'/'}>
          <img src={logo} alt="Organick" />
        </Link>

        <nav className="mr-auto text-xl font-bold">
          <ul className="flex items-center gap-10">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <select id="pages">
                <option value="">Pages</option>
              </select>
            </li>
            <li>
              <Link to={"/shop"}>Shop</Link>
            </li>
            <li>
              <Link to={"/portfolio"}>Projects</Link>
            </li>
            <li>
              <Link to={"/blog"}>News</Link>
            </li>
          </ul>
        </nav>

        <div className="relative mr-[18px] w-[376px] h-[66px]">
          <input className="w-full h-full rounded-[36px] bg-[var(--clr-alabaster-light)]" type="text" />
          <button className="absolute top-[5px] right-[6px] flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-full bg-[var(--clr-acapulco)]">
            <ReactSVG className="text-center" src={search} />
          </button>
        </div>

        <div className="flex items-center gap-3 pt-[5px] pr-[23px] pb-[5px] pl-[6px] border border-[var(--clr-alto-light)] rounded-[33px]">
          <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-full text-[0] bg-[var(--clr-blue-dianne)]">
            <ReactSVG src={cart} />
          </div>
          <p className="text-lg font-semibold">
            Cart <span id="cart-quantity">(0)</span>
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
