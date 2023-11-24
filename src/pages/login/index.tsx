import { Link } from "react-router-dom";
import Container from "../../components/Container";
import Header from "./components/Header";
import { useState } from "react";
import { Eye, EyeOff } from "react-feather";
import { Helmet } from "react-helmet";

const Login = () => {
  const [type, setType] = useState("password");

  return (
    <>
      <Helmet>
        <title>Bridge - Login your account</title>
      </Helmet>
      <div>
        <Header />
        <Container className="max-w-4xl text-center">
          <h2 className="text-2xl font-semibold mb-2">Login to your account</h2>
          <p className="mb-10 text-[0.9rem]">
            Don't have an account?{" "}
            <Link to="/login" className="font-semibold text-primary_blue">
              Register
            </Link>
          </p>
          <form className="max-w-lg mx-auto">
            <div className="mb-4">
              <label
                htmlFor="email"
                className="font-semibold block text-left mb-2"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                placeholder="john@gmail.com"
                className="h-16 appearance-none rounded-md border-2 border-[#bbb] w-full px-2"
              />
            </div>
            <div className="mb-8">
              <label
                htmlFor="password"
                className="font-semibold block text-left mb-2"
              >
                Password
              </label>
              <div className="relative ">
                <input
                  type={type}
                  id="password"
                  placeholder="******************"
                  className="h-16 appearance-none rounded-md border-2 border-[#bbb] w-full px-2"
                />
                {type === "text" ? (
                  <EyeOff
                    className="w-4 absolute top-1/2 -translate-y-[50%] right-2"
                    onClick={() => setType("password")}
                  />
                ) : (
                  <Eye
                    className="w-4 absolute top-1/2 -translate-y-[50%] right-2"
                    onClick={() => setType("text")}
                  />
                )}
              </div>
            </div>
            <button className="h-12 text-center bg-primary_blue text-white font-bold w-full rounded-md transform hover:scale-95 hover:opacity-75">
              Login
            </button>
          </form>
          <p className="mt-6 text-xs">
            By registering, you are agreeing to out{" "}
            <span className="text-primary_blue">terms</span> and{" "}
            <span className="text-primary_blue">conditions</span>
          </p>
        </Container>
      </div>
    </>
  );
};
export default Login;
