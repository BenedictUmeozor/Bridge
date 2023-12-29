import Container from "../../components/Container";
import Accordion from "./Accordion";

const Support = () => {
  return (
    <Container>
      <h2 className="text-lg mb-4 text-[#8089AB] font-semibold ">Support</h2>
      <div className="grid grid-cols-2 items-start gap-10 max-md:gap-14 text-primary_blue max-md:grid-cols-1">
        <div className="">
          <h2 className="text-3xl mb-4 font-bold">FAQs</h2>
          <p className="mb-8">
            These FAQs and answers have been curated to answer all the basic and
            importand questions you have about our product. If you still hve
            further questions after reading this, you can contact our customer
            care line and we wil be there to answer.
          </p>
          <p className="mb-2">
            If you need more information kindly reach out via
          </p>
          <p className="mb-2 font-semibold">
            Email: Customer.support@bridge.com
          </p>
          <p className="font-semibold">Phone-number: +234 907 6789 893</p>
        </div>
        <div>
          <Accordion
            title="Lörem ipsum tenyl"
            description="Lorem ipsum dolor sit amet consectetur. Mi egestas tortor sed amet. Scelerisque blandit ut vel facilisis cras. Euismod tempor vestibulum vitae et ut neque. Cur"
            isOpen={true}
          />
          <Accordion
            title="Lörem ipsum tenyl"
            description="Lorem ipsum dolor sit amet consectetur. Mi egestas tortor sed amet. Scelerisque blandit ut vel facilisis cras. Euismod tempor vestibulum vitae et ut neque. Cur"
          />
          <Accordion
            title="Lörem ipsum tenyl"
            description="Lorem ipsum dolor sit amet consectetur. Mi egestas tortor sed amet. Scelerisque blandit ut vel facilisis cras. Euismod tempor vestibulum vitae et ut neque. Cur"
          />
          <Accordion
            title="Lörem ipsum tenyl"
            description="Lorem ipsum dolor sit amet consectetur. Mi egestas tortor sed amet. Scelerisque blandit ut vel facilisis cras. Euismod tempor vestibulum vitae et ut neque. Cur"
          />
          <Accordion
            title="Lörem ipsum tenyl"
            description="Lorem ipsum dolor sit amet consectetur. Mi egestas tortor sed amet. Scelerisque blandit ut vel facilisis cras. Euismod tempor vestibulum vitae et ut neque. Cur"
          />
        </div>
      </div>
    </Container>
  );
};
export default Support;
