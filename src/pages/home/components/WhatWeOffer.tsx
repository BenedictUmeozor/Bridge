import Container from "../../../components/Container";
import user from "../../../assets/icons/user.svg";
import yen from "../../../assets/icons/yen.svg";
import hand from "../../../assets/icons/hand.svg";

const WhatWeOffer = () => {
  return (
    <div className="py-12">
      <Container className="text-center">
        <h2 className="text-4xl font-bold mb-8 max-md:text-3xl">What We Offer</h2>
        <div className="grid grid-cols-3 gap-4 max-md:grid-cols-1 max-md:gap-8">
          <div>
            <img src={user} alt="image" className="w-16 mx-auto mb-3" />
            <h3 className="font-semibold text-xl mb-1">
              Create profiles with beneficiaries
            </h3>
            <p>
              you can create profiles for yourself and also save multiple
              beneficiaries
            </p>
          </div>

          <div>
            <img src={yen} alt="image" className="w-16 mx-auto mb-3" />
            <h3 className="font-semibold text-xl mb-1">
              Create profiles with beneficiaries
            </h3>
            <p>
              you can create profiles for yourself and also save multiple
              beneficiaries
            </p>
          </div>

          <div>
            <img src={hand} alt="image" className="w-16 mx-auto mb-3" />
            <h3 className="font-semibold text-xl mb-1">
              Create profiles with beneficiaries
            </h3>
            <p>
              you can create profiles for yourself and also save multiple
              beneficiaries
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default WhatWeOffer;
