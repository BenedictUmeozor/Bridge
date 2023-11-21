import { Link } from "react-router-dom";
import image from "../../../assets/images/cross-border.png";
import Container from "../../../components/Container";

const CrossBorder = () => {
  return (
    <div className="py-10 bg-[#AAB1C7]">
      <Container className="grid grid-cols-2 gap-8 items-center max-md:grid-cols-1">
        <div className="max-md:order-2">
          <img
            src={image}
            alt="Cross Border image"
            className="w-full max-w-[500px] mx-auto"
          />
        </div>
        <div className="max-md:order-1 max-md:text-center">
          <h2 className="text-4xl font-bold text-[#222222] mb-5 max-md:text-3xl">
            Cross-Boarder transfer made effortless
          </h2>
          <Link
            to="/"
            className="border-2 border-primary_blue bg-transparent px-6 py-2 text-primary_blue rounded-xl hover:bg-primary_blue hover:text-white"
          >
            Learn More
          </Link>
        </div>
      </Container>
    </div>
  );
};
export default CrossBorder;
