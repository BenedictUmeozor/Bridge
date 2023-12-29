import { Link } from "react-router-dom";
import Container from "../../components/Container";
import { ChevronDown } from "react-feather";
import logo from "../../assets/icons/logo.svg";

const FAQHeader = () => {
  return (
    <Container className="py-6">
      <header className="max-w-4xl flex items-center justify-between pb-6 mb-4">
        <Link to="/dashoard" className="">
          <img src={logo} alt="image" className="w-44 mx-auto" />
        </Link>
        <div className="flex items-center gap-10 max-md:gap-2">
          <Link to="/faqs" className=" font-semibold text-base">
            FAQs
          </Link>
          <div>
            <span className="flex items-center gap-2  font-bold cursor-pointer text-base max-md:text-xs">
              <span className="font-semibold">ENGLISH</span>{" "}
              <ChevronDown className="w-4" />
            </span>
          </div>
        </div>
      </header>
      <div className="mt-4 ">
        <p className="mb-6">The FAQs</p>
        <h2 className="text-2xl font-semibold mb-3">Help Center</h2>
        <p className="text-[0.9rem]">
          Everything you need to know about the product and transfer policies
        </p>
      </div>
    </Container>
  );
};
export default FAQHeader;
