import { ChevronDown } from "react-feather";
import Container from "../../../components/Container";
import { Link } from "react-router-dom";
import logo from "../../../assets/icons/logo.png";
import { memo } from "react";

const Header = memo(() => {
  return (
    <header className="py-6">
      <Container className="flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 z-50">
          <img src={logo} alt="Bridge" className="w-14" />
          <h1 className="text-primary_blue text-lg tracking-wider font-[1000]">
            BRIDGE
          </h1>
        </Link>
        <div className="flex items-center gap-10 max-md:gap-2">
          <Link to="/" className="text-primary_blue font-bold text-base">
            FAQs
          </Link>
          <div>
            <span className="flex items-center gap-2 text-primary_blue font-bold cursor-pointer text-base max-md:text-xs">
              ENGLISH <ChevronDown className="w-4" />
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
});
export default Header;
