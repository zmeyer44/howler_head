import { images } from "../../assets";
import { FaInstagram, FaTwitter, FaFacebookSquare } from "react-icons/fa";
import "./footer.styles.css";

const Footer = () => {
  return (
    <div className="footer_container">
      <img src={images.logo} />
      <div className="social">
        <h4>Follow Us</h4>
        <div className="icons">
          <a href="https://www.instagram.com/howlerheadwhiskey/">
            <FaInstagram />
          </a>
          <a href="https://twitter.com/howlerhead">
            <FaTwitter />
          </a>
          <a href="https://www.facebook.com/HowlerHeadWhiskey/">
            <FaFacebookSquare />
          </a>
        </div>
      </div>
      <h4>
        &copy;{new Date().getFullYear()}. Wooler Brands Inc. &nbsp; - &nbsp; All
        rights reserved
      </h4>
    </div>
  );
};

export default Footer;
