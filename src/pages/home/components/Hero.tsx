import { Link } from 'react-router-dom';
import Container from '../../../components/Container';

const Hero = () => {
  return (
    <div className='py-6 max-md:pt-0'>
      <Container className='grid grid-cols-2 items-center gap-8 max-md:grid-cols-1'>
        <div className='max-md:text-center'>
          <h2 className='text-5xl font-bold text-[#222222] mb-5 max-md:text-4xl'>
            Your Path to Global <br className='max-md:hidden' /> Seamless
            Transfers
          </h2>
          <p className='text-black mb-5'>
            Experience international seamless transfers from anywhere in the
            world. You are just one step away from a hassle free transfer
            lifestyle.
          </p>
          <Link
            to='/create'
            className='px-6 py-2 bg-primary_blue border-2 border-transparent text-white rounded-xl hover:text-primary_blue hover:bg-transparent hover:border-primary_blue'>
            Create an Account
          </Link>
        </div>
        <div>
          <img
            src='/man-hero.svg'
            alt='Hero image'
            className='w-full max-w-[500px] mx-auto'
          />
        </div>
      </Container>
    </div>
  );
};
export default Hero;
