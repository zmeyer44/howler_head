import { useState } from "react";
import { Link } from "react-router-dom";
import { images } from "../../assets";
import { FiMenu } from "react-icons/fi";
import { CgClose } from "react-icons/cg";
import "./header.styles.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header>
        <div className="menu_button">
          {isOpen ? (
            <CgClose onClick={() => setIsOpen(false)} />
          ) : (
            <FiMenu onClick={() => setIsOpen(true)} />
          )}
        </div>
        <div className="logo_section">
          <img src={images.logo} />
        </div>
        <div className="links_section">
          <div className="site_pages">
            <ul>
              <li>
                <Link>Home </Link>
              </li>
              <li>
                <Link>Merch</Link>
              </li>
              <li>
                <Link>Recipies</Link>
              </li>
              <li>
                <Link>Featured</Link>
              </li>
              <li>
                <Link>Contact</Link>
              </li>
            </ul>
          </div>
          <div className="buy_now">
            <a href="https://drizly.com/liquor/whiskey/bourbon/howler-head-banana-infused-kentucky-straight-bourbon/p99996">
              <div className="h1">Buy Now</div>
            </a>
          </div>
        </div>
      </header>
      <div className={`mobile_menu ${isOpen}`}>
        <div className="mobile_menu_items">
          <ul>
            <li>
              <Link to="/">Home </Link>
            </li>
            <li>
              <Link to="/">Merch</Link>
            </li>
            <li>
              <Link to="/">Recipies</Link>
            </li>
            <li>
              <Link to="/">Featured</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
          </ul>
          <div className="buy_now">
            <a href="https://drizly.com/liquor/whiskey/bourbon/howler-head-banana-infused-kentucky-straight-bourbon/p99996">
              <div className="h1">Buy Now</div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
