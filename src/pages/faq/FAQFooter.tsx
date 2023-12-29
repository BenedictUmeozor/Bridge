import Container from "../../components/Container";

const FAQFooter = () => {
  return (
    <Container className="grid grid-cols-2 items-center gap-10 text-primary_blue max-md:grid-cols-1">
      <div className="max-md:text-center">
        <h2 className="text-xl font-semibold mb-2">
          Subscribe to our newsletter
        </h2>
        <p>
          Stay in the loop of everything you need to know by subscribing to our
          weekly news letter.
        </p>
      </div>
      <div className="h-16 flex items-center gap-2 max-md:h-auto max-md:block">
        <input
          type="email"
          placeholder="Enter your email"
          className="h-full flex-[3] px-2 border-2 rounded border-primary_blue focus:bg-[#efefef] max-md:h-12 max-md:w-full max-md:mb-3"
        />
        <button className="h-full flex-1 rounded bg-primary_blue text-white hover:scale-95 max-md:h-10 max-md:w-full">
          Subscribe
        </button>
      </div>
    </Container>
  );
};
export default FAQFooter;
