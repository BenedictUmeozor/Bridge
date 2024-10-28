import Container from '../../../components/Container';
import { Dispatch, SetStateAction } from 'react';

type Props = {
  onNext: () => void;
  chosenAccount: null | 'personal' | 'business';
  setChosenAccount: Dispatch<SetStateAction<'personal' | 'business' | null>>;
};

const Account = ({ onNext, chosenAccount, setChosenAccount }: Props) => {
  const setAccount = (account: 'personal' | 'business' | null) => {
    setChosenAccount(account);
    onNext();
  };

  return (
    <div>
      <Container className='text-center max-w-4xl'>
        <h2 className='text-2xl font-semibold mb-2'>
          What kind of account would you like to open?
        </h2>
        <p className='mb-10 text-[0.9rem]'>
          Please note you can not use a personal account to open a business
          account
        </p>
        <div className='flex items-center gap-6 max-md:flex-col'>
          <div className='flex-1 text-center'>
            <h3 className='text-lg font-semibold'>Personal Account</h3>
            <div onClick={() => setAccount('personal')}>
              <img
                src='/personal.svg'
                alt='image'
                className={
                  'max-w-full mx-auto transition-all rounded transform duration-300 ease-in hover:scale-95 hover:border-2 hover:border-primary_blue ' +
                  (chosenAccount === 'personal'
                    ? 'border-2 border-primary_blue'
                    : '')
                }
              />
            </div>
          </div>
          <div className='flex-1 text-center'>
            <h3 className='text-lg font-semibold'>Business Account</h3>
            <div onClick={() => setAccount('business')}>
              <img
                src='/business.svg'
                alt='image'
                className={
                  'max-w-full mx-auto transition-all rounded transform duration-300 ease-in hover:scale-95 hover:border-2 hover:border-primary_blue ' +
                  (chosenAccount === 'business'
                    ? 'border-2 border-primary_blue'
                    : '')
                }
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default Account;
