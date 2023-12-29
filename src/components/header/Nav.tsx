import { ChevronDown } from "react-feather";
import { Link } from "react-router-dom";
import Container from "../Container";
import facebook from "../../assets/icons/facebook.svg";
import instagram from "../../assets/icons/instagram.svg";
import twitter from "../../assets/icons/twitter.svg";

const Nav = () => {
  const token = JSON.parse(sessionStorage.getItem("token")!);

  return (
    <nav className="mobile_nav hidden max-md:block">
      <Container className="pt-28 pb-4">
        <div className="flex items-center justify-center gap-10 mb-12">
          <Link to="/faqs" className="text-primary_blue font-bold text-base">
            FAQs
          </Link>
          <div>
            <span className="flex items-center gap-2 text-primary_blue font-bold cursor-pointer text-base">
              ENGLISH <ChevronDown className="w-4" />
            </span>
          </div>
        </div>
        {token ? (
          <>
            <div className="px-6 flex items-center justify-center">
              <Link
                to="/dashboard"
                className="w-48 inline-block mx-auto border-2 border-primary_blue text-center py-2 font-semibold rounded-xl text-primary_blue hover:text-white hover:bg-primary_blue"
              >
                Dashboard
              </Link>
            </div>
          </>
        ) : (
          <div className=" flex flex-col items-center justify-end px-6 gap-6">
            <Link
              to="/login"
              className="w-48 border-2 border-primary_blue text-center py-2 font-semibold rounded-xl text-primary_blue hover:text-white hover:bg-primary_blue"
            >
              Login
            </Link>
            <Link
              to="/create"
              className="w-48 border-2 border-primary_blue text-center py-2 font-semibold rounded-xl text-white bg-primary_blue hover:text-primary_blue hover:bg-white"
            >
              Create an Account
            </Link>
          </div>
        )}
        <div className="mt-12">
          <h3 className="text-center text-xl text-primary_blue font-semibold mb-4">
            Follow us
          </h3>
          <div className="flex items-center justify-center gap-3">
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
      </Container>
    </nav>
  );
};
export default Nav;
