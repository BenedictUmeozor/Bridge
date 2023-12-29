import FAQFooter from "./FAQFooter";
import FAQHeader from "./FAQHeader";
import Support from "./Support";

const FAQ = () => {
  return (
    <section>
      <div className="bg-primary_blue text-white">
        <FAQHeader />
      </div>
      <div className="py-8 mb-4">
        <Support />
      </div>
      <div className="py-8 pt-4 mb-4">
        <FAQFooter />
      </div>
    </section>
  );
};
export default FAQ;
