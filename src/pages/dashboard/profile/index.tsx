import { Helmet } from "react-helmet";
import Address from "./components/Address";
import PIN from "./components/PIN";
import Personal from "./components/Personal";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import Loading from "../../../components/Backdrop";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [updated, setUpdated] = useState(false);

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [date, setDate] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [BVN, setBVN] = useState("");
  const [homeAddress, setHomeAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [pin, setPin] = useState("");

  console.log(
    name,
    surname,
    phoneNumber,
    month,
    year,
    date,
    country,
    city,
    BVN,
    homeAddress,
    postalCode,
    pin
  );

  const handleMonthChange = (value: string) => setMonth(value);
  const handleDateChange = (value: string) => setDate(value);
  const handleYearChange = (value: string) => setYear(value);
  const handleNameChange = (value: string) => setName(value);
  const handleSurnameChange = (value: string) => setSurname(value);
  const handlePhoneNumberChange = (value: string) => setPhoneNumber(value);
  const handleCountryChange = (value: string) => setCountry(value);
  const handleCityChange = (value: string) => setCity(value);
  const handleBVNChange = (value: string) => setBVN(value);
  const handleHomeAddressChange = (value: string) => setHomeAddress(value);
  const handlePostalCodeChange = (value: string) => setPostalCode(value);
  const handlePinChange = (value: string) => setPin(value);

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const update = async () => {
    setIsLoading(true);
    setUpdated(false);

    try {
      await delay(3000);

      setIsLoading(false);
      setUpdated(true);
    } catch (error) {
      setIsLoading(false);
      toast.error("An error occurred. Please try again.");
    }
  };

  useEffect(() => {
    if (isLoading) {
      toast.loading("Please wait...", { duration: 3000 });
    } else if (updated) {
      toast.success("Your profile was updated");
      navigate("/dashboard");
    }
  }, [isLoading, updated]);

  return (
    <>
      <Helmet>
        <title>Bridge - Update your profile</title>
      </Helmet>
      {isLoading && <Loading />}
      <div>
        {currentStep !== 3 && (
          <>
            {" "}
            <h2 className="font-bold text-2xl mb-3">Your details</h2>
            <p className="mb-6">Personal information</p>
          </>
        )}
        {currentStep === 1 && (
          <Personal
            changeStep={() => setCurrentStep(2)}
            onDateChange={handleDateChange}
            onMonthChange={handleMonthChange}
            onYearChange={handleYearChange}
            onNameChange={handleNameChange}
            onPhoneNumberChange={handlePhoneNumberChange}
            onSurnameChange={handleSurnameChange}
          />
        )}
        {currentStep === 2 && (
          <Address
            changeStep={() => setCurrentStep(3)}
            onBVNChange={handleBVNChange}
            onCityChange={handleCityChange}
            onCountryChange={handleCountryChange}
            onHomeAddressChange={handleHomeAddressChange}
            onPostalCodeChange={handlePostalCodeChange}
          />
        )}
        {currentStep === 3 && (
          <PIN changeStep={update} onPinChange={handlePinChange} />
        )}
      </div>
    </>
  );
};
export default Profile;
