import { Link } from "react-router-dom";
import logo from "../assets/icons/logo.svg";
import facebook from "../assets/icons/facebook.svg";
import instagram from "../assets/icons/instagram.svg";
import twitter from "../assets/icons/twitter.svg";
import Container from "./Container";

const Footer = () => {
  return (
    <footer className="pt-12 pb-6 bg-primary_blue text-white">
      <Container className="grid grid-cols-4 gap-4 max-lg:grid-cols-2 max-md:grid-cols-1 max-lg:gap-8">
        <div>
          <Link to="/" className="flex items-center gap-2 mb-6">
            <img src={logo} alt="Bridge" className="w-48" />
          </Link>
          <div className="flex items-center gap-3">
            <img
              src={facebook}
              alt="icon"
              className="w-6 transform transition-transform duration-150 ease-linear cursor-pointer hover:scale-95"
            />
            <img
              src={instagram}
              alt="icon"
              className="w-6 transform transition-transform duration-150 ease-linear cursor-pointer hover:scale-95"
            />
            <img
              src={twitter}
              alt="icon"
              className="w-6 transform transition-transform duration-150 ease-linear cursor-pointer hover:scale-95"
            />
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-xl font-semibold">Company</h3>
          <ul>
            <li className="mb-1">
              <Link to="/">About us</Link>
            </li>
            <li className="mb-1">
              <Link to="/">Blog</Link>
            </li>
            <li className="mb-1">
              <Link to="/">Investors</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-xl font-semibold">Support</h3>
          <ul>
            <li className="mb-1">
              <Link to="/">FAQs</Link>
            </li>
            <li className="mb-1">
              <Link to="/">Feedback</Link>
            </li>
            <li className="mb-1">
              <Link to="/">Privacy policy</Link>
            </li>
            <li className="mb-1">
              <Link to="/">Terms and conditions</Link>
            </li>
          </ul>
        </div>

        <div className=" flex flex-col items-center justify-center px-6 gap-6 max-md:items-start">
          <Link
            to="/login"
            className="w-48 border-2 border-white text-center py-1 font-semibold rounded-xl text-white transfor, hover:scale-95 max-md:w-full"
          >
            Login
          </Link>
          <Link
            to="/create"
            className="w-48 border-2 border-white text-center py-1 font-semibold rounded-xl text-primary_blue bg-white transform hover:scale-95 max-md:w-full"
          >
            Create an Account
          </Link>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
