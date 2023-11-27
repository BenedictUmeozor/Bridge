import { Helmet } from "react-helmet";
import Address from "./components/Address";
import PIN from "./components/PIN";
import Personal from "./components/Personal";
import { useEffect, useState } from "react";
import { useAxiosAuth } from "../../../hooks/useAxios";
import { toast } from "react-hot-toast";
import Loading from "../../../components/Backdrop";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../../contexts/User";

const Profile = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();

  const { getUser } = useUserContext();

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

  const { fetchData, isLoading, error } = useAxiosAuth("/users/update", "put", {
    name,
    surname,
    phoneNumber,
    country,
    city,
    BVN,
    homeAddress,
    postalCode,
    dateOfBirth: {
      month,
      day: date,
      year,
    },
    PIN: pin,
  });

  const updateProfile = async () => {
    if (pin.length) {
      toast.promise(fetchData(), {
        loading: "Updating your profile...",
        success: () => {
          getUser().then(() => navigate("/dashboard"));
          return "Profile updated successfully";
        },
        error: "Profile update failed",
      });
    } else {
      console.log(pin, "undefined");
    }
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, []);

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
          <PIN changeStep={updateProfile} onPinChange={handlePinChange} />
        )}
      </div>
    </>
  );
};
export default Profile;
