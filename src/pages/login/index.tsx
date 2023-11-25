import { Link } from "react-router-dom";
import Container from "../../components/Container";
import Header from "./components/Header";
import { useState, useEffect, FormEvent } from "react";
import { Eye, EyeOff } from "react-feather";
import { Helmet } from "react-helmet";
import NotProtected from "../../components/NotProtected";
import { useAxiosInstance } from "../../hooks/useAxios";
import { toast } from "react-hot-toast";
import Loading from "../../components/Backdrop";

const Login = () => {
  const [type, setType] = useState("password");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { fetchData, isLoading, error } = useAxiosInstance(
    "/auth/login",
    "post",
    { email, password }
  );

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !password) {
      return toast.error("All fields are required");
    }

    toast.promise(fetchData(), {
      loading: "Logging in...",
      success: ({ _id, token }: { _id: string; token: string }) => {
        sessionStorage.setItem("_id", JSON.stringify(_id));
        sessionStorage.setItem("token", JSON.stringify(token));
        return "You are logged in";
      },
      error: "Login failed",
    });
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  return (
    <>
      <Helmet>
        <title>Bridge - Login your account</title>
      </Helmet>
      {isLoading && <Loading />}
      <NotProtected>
        <div>
          <Header />
          <Container className="max-w-4xl text-center">
            <h2 className="text-2xl font-semibold mb-2">
              Login to your account
            </h2>
            <p className="mb-10 text-[0.9rem]">
              Don't have an account?{" "}
              <Link to="/create" className="font-semibold text-primary_blue">
                Register
              </Link>
            </p>
            <form className="max-w-lg mx-auto" onSubmit={onSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="font-semibold block text-left mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="john@gmail.com"
                  onChange={(e) => setEmail(e.target.value)}
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
                    onChange={(e) => setPassword(e.target.value)}
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
      </NotProtected>
    </>
  );
};
export default Login;
