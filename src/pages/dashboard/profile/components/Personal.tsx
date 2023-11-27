import { DatePicker, Select } from "antd";
import { useState, useEffect, FormEvent } from "react";
import libphonenumber from "google-libphonenumber";
import { useUserContext } from "../../../../contexts/User";
import dayjs from "dayjs";

const phoneUtil = libphonenumber.PhoneNumberUtil.getInstance();
const PNT = libphonenumber.PhoneNumberType;

type Code = {
  code: libphonenumber.RegionCode;
  countryCode: string;
};

type Props = {
  changeStep: () => void;
  onMonthChange: (value: string) => void;
  onDateChange: (value: string) => void;
  onYearChange: (value: string) => void;
  onNameChange: (value: string) => void;
  onPhoneNumberChange: (value: string) => void;
  onSurnameChange: (value: string) => void;
};

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const Personal = ({
  changeStep,
  onDateChange,
  onMonthChange,
  onYearChange,
  onNameChange,
  onPhoneNumberChange,
  onSurnameChange,
}: Props) => {
  const [countryCodes, setCountryCodes] = useState<Code[]>([]);

  const { user } = useUserContext();

  const defaultMonth = dayjs(
    `${user?.dateOfBirth.year}-${user?.dateOfBirth.month}-${user?.dateOfBirth.day}`,
    "YYYY-MMMM-DD"
  );
  const defaultDay = dayjs(
    `${user?.dateOfBirth.year}-${user?.dateOfBirth.month}-${user?.dateOfBirth.day}`,
    "YYYY-MMMM-DD"
  );
  const defaultYear = dayjs(
    `${user?.dateOfBirth.year}-${user?.dateOfBirth.month}-${user?.dateOfBirth.day}`,
    "YYYY-MMMM-DD"
  );

  useEffect(() => {
    if (user) {
      onNameChange(user.name ?? "");
      onPhoneNumberChange(user.phoneNumber ?? "");
      onSurnameChange(user.surname ?? "");
      onDateChange(user.dateOfBirth.day ?? "");
      onYearChange(user.dateOfBirth.year ?? "");
      onMonthChange(user.dateOfBirth.month ?? "");
    }
  }, [user]);

  useEffect(() => {
    const fetchCountryCodes = () => {
      const allRegions = phoneUtil.getSupportedRegions();

      const codes: Code[] = Array.from(allRegions)
        .map((region: string) => {
          const exampleNumber = phoneUtil.getExampleNumberForType(
            region,
            PNT.MOBILE
          );

          // Check if exampleNumber is not null before accessing its methods
          if (exampleNumber) {
            return {
              code: region,
              countryCode: `+${exampleNumber.getCountryCode()}`,
            };
          }
          return null;
        })
        .filter(Boolean) as Code[];

      setCountryCodes(codes);
    };

    fetchCountryCodes();
  }, []);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    changeStep();
  };

  return (
    <form className="max-w-lg" onSubmit={onSubmit}>
      <div className="mb-4">
        <label className="block mb-1 text-[0.95rem]">
          First name and middle name (if any)
        </label>
        <input
          type="text"
          placeholder="John doe"
          defaultValue={user?.name}
          onChange={(e) => onNameChange(e.target.value)}
          className="w-full h-14 border-2 border-[#ccc] focus:border-primary_blue rounded-md text-[0.9rem] px-2"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 text-[0.95rem]">Surname</label>
        <input
          type="text"
          placeholder="John doe"
          defaultValue={user?.surname}
          onChange={(e) => onSurnameChange(e.target.value)}
          className="w-full h-14 border-2 border-[#ccc] focus:border-primary_blue rounded-md text-[0.9rem] px-2"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 text-[0.95rem]">Date of birth</label>
        <div className="flex items-center gap-2">
          <DatePicker
            picker="month"
            className="flex-1 h-14"
            format="MMMM"
            defaultValue={defaultMonth}
            onChange={(value) => {
              const val = value as unknown;
              const newVal = val as { $M: number };
              onMonthChange(months[newVal.$M]);
            }}
          />
          <DatePicker
            picker="date"
            className="flex-1 h-14"
            format="DD"
            defaultValue={defaultDay}
            onChange={(value) => {
              const val = value as unknown;
              const newVal = val as { $D: string };
              onDateChange(newVal.$D);
            }}
          />
          <DatePicker
            picker="year"
            className="flex-1 h-14"
            format="YYYY"
            defaultValue={defaultYear}
            onChange={(value) => {
              const val = value as unknown;
              const newVal = val as { $y: string };
              onYearChange(newVal.$y);
            }}
          />
        </div>
      </div>
      <div className="mb-6">
        <label className="block mb-1 text-[0.95rem]">Phone number</label>
        <div className="flex items-center gap-2">
          <Select
            className="flex-1 h-14"
            optionFilterProp="children"
            defaultValue={"+234"}
          >
            {countryCodes.map(({ code, countryCode }) => (
              <Select.Option key={code} value={code}>
                {`${countryCode} (${code})`}
              </Select.Option>
            ))}
          </Select>
          <input
            type="tel"
            placeholder="733635363"
            defaultValue={user?.phoneNumber}
            onChange={(e) => onPhoneNumberChange(e.target.value)}
            className="flex-[2] h-14 border-2 border-[#ccc] focus:border-primary_blue rounded-md text-[0.9rem] px-2"
            required
          />
        </div>
      </div>
      <button className="w-[90%] mx-auto text-white bg-primary_blue h-14 rounded-md hover:scale-95 flex items-center justify-center">
        Next
      </button>
    </form>
  );
};
export default Personal;
