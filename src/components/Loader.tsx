import logo from "../assets/icons/logo.png";

const Loader = () => {
  return (
    <div className="h-screen fixed top-0 left-0 z-[50] bg-white flex items-center justify-center w-full loader">
      <div className="flex items-center gap-2 z-50">
        <img src={logo} alt="Bridge" className="w-14" />
        <h1 className="text-primary_blue text-lg tracking-wider font-[1000]">
          BRIDGE
        </h1>
      </div>
    </div>
  );
};
export default Loader;
