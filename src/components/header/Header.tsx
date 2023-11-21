import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "react-feather";
import Container from "../Container";
import logo from "../../assets/icons/logo.png";
import Nav from "./Nav";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="py-8">
        <Container className="flex items-center justify-between">
          <div className="flex-[1.1] flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 z-50">
              <img src={logo} alt="Bridge" className="w-14" />
              <h1 className="text-primary_blue text-lg tracking-wider font-[1000]">
                BRIDGE
              </h1>
            </Link>
            <div className="flex items-center gap-10 max-md:hidden">
              <div>
                <span className="flex items-center gap-2 text-primary_blue font-bold cursor-pointer text-base">
                  NGN <ChevronDown className="w-4" />
                </span>
              </div>
              <div>
                <span className="flex items-center gap-2 text-primary_blue font-bold cursor-pointer text-base">
                  ENGLISH <ChevronDown className="w-4" />
                </span>
              </div>
            </div>
          </div>
          <div className="flex-[0.9] flex items-center justify-end px-6 gap-6 max-md:hidden">
            <Link
              to="/login"
              className="w-48 border-2 border-primary_blue text-center py-1 font-semibold rounded-xl text-primary_blue hover:text-white hover:bg-primary_blue"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="w-48 border-2 border-primary_blue text-center py-1 font-semibold rounded-xl text-white bg-primary_blue hover:text-primary_blue hover:bg-white"
            >
              Create an Account
            </Link>
          </div>
          {open ? (
            <X
              className="w-8 h-8 text-primary_blue z-50"
              onClick={() => setOpen(false)}
            />
          ) : (
            <Menu
              className="w-8 h-8 text-primary_blue z-50"
              onClick={() => setOpen(true)}
            />
          )}
        </Container>
      </header>
      {open && <Nav />}
    </>
  );
};
export default Header;
