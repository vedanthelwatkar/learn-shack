import React, { useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { countries } from "@/constants";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLocation } from "react-router-dom";

const ContactStep1 = ({ initialData = {}, onSubmit }) => {
  const location = useLocation();
  const state = location.state;
  const [selectedCountry, setSelectedCountry] = useState(
    initialData.countryCode || "+91"
  );
  const [phoneNumber, setPhoneNumber] = useState(initialData.phoneNumber || "");
  const [fullName, setFullName] = useState(initialData.fullName || "");
  const [email, setEmail] = useState(initialData.email || "");

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
  });

  const [touched, setTouched] = useState({
    fullName: false,
    email: false,
    phoneNumber: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const selectedCountryData = countries.find(
    (country) => country.phoneCode === selectedCountry
  );

  useEffect(() => {
    if (initialData.fullName && initialData.fullName !== fullName)
      setFullName(initialData.fullName);
    if (initialData.email && initialData.email !== email)
      setEmail(initialData.email);
    if (initialData.phoneNumber && initialData.phoneNumber !== phoneNumber)
      setPhoneNumber(initialData.phoneNumber);
    if (initialData.countryCode && initialData.countryCode !== selectedCountry)
      setSelectedCountry(initialData.countryCode);
  }, [initialData]);

  const validateFullName = (name) => {
    if (!name.trim()) return "Full name is required";
    if (name.trim().length < 2) return "Name must be at least 2 characters";
    return "";
  };

  const validateEmail = (email) => {
    if (!email.trim()) return "Email is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return "Please enter a valid email address";
    return "";
  };

  const validatePhoneNumber = (phoneNumber) => {
    if (!touched.phoneNumber && !phoneNumber) return "";

    if (!phoneNumber.trim()) return "Phone number is required";

    if (!/^\d+$/.test(phoneNumber))
      return "Phone number must contain only digits";

    const maxLength = selectedCountryData?.maxNumberLength || 10;
    if (phoneNumber.length > maxLength) {
      return `Phone number cannot exceed ${maxLength} digits for ${selectedCountryData?.name}`;
    }

    if (phoneNumber.length < maxLength) return "Phone number is too short";

    return "";
  };

  const handleFieldFocus = (field) => {
    setTouched((prev) => ({
      ...prev,
      [field]: true,
    }));
  };

  const handleFullNameChange = (e) => {
    const value = e.target.value;
    setFullName(value);
    if (touched.fullName) {
      setErrors((prev) => ({
        ...prev,
        fullName: validateFullName(value),
      }));
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (touched.email) {
      setErrors((prev) => ({
        ...prev,
        email: validateEmail(value),
      }));
    }
  };

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;

    if (value && !/^\d*$/.test(value)) return;

    const maxLength = selectedCountryData?.maxNumberLength || 10;
    if (value.length <= maxLength) {
      setPhoneNumber(value);
      if (touched.phoneNumber) {
        setErrors((prev) => ({
          ...prev,
          phoneNumber: validatePhoneNumber(value),
        }));
      }
    }
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({
      ...prev,
      [field]: true,
    }));

    let errorMessage = "";
    switch (field) {
      case "fullName":
        errorMessage = validateFullName(fullName);
        break;
      case "email":
        errorMessage = validateEmail(email);
        break;
      case "phoneNumber":
        errorMessage = validatePhoneNumber(phoneNumber);
        break;
      default:
        break;
    }

    setErrors((prev) => ({
      ...prev,
      [field]: errorMessage,
    }));
  };

  const handleCountryChange = (value) => {
    setSelectedCountry(value);

    if (touched.phoneNumber && phoneNumber) {
      setTimeout(() => {
        const newSelectedCountryData = countries.find(
          (country) => country.code === value
        );

        const maxLength = newSelectedCountryData?.maxNumberLength || 10;

        if (phoneNumber.length > maxLength) {
          const truncatedNumber = phoneNumber.slice(0, maxLength);
          setPhoneNumber(truncatedNumber);
          setErrors((prev) => ({
            ...prev,
            phoneNumber: validatePhoneNumber(truncatedNumber),
          }));
        } else {
          setErrors((prev) => ({
            ...prev,
            phoneNumber: validatePhoneNumber(phoneNumber),
          }));
        }
      }, 0);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setTouched({
      fullName: true,
      email: true,
      phoneNumber: true,
    });

    const nameError = validateFullName(fullName);
    const emailError = validateEmail(email);
    const phoneError = validatePhoneNumber(phoneNumber);

    setErrors({
      fullName: nameError,
      email: emailError,
      phoneNumber: phoneError,
    });

    if (nameError || emailError || phoneError) {
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      onSubmit({
        fullName,
        email,
        phoneNumber,
        countryCode: selectedCountry,
      });
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit} noValidate>
      <div className="flex flex-col gap-4 md:gap-9">
        <div className="flex flex-col gap-3">
          <span className="font-medium text-neutral-700 text-body-lg">
            Full Name
          </span>
          <Input
            placeholder="Enter full name"
            value={fullName}
            onChange={handleFullNameChange}
            onBlur={() => handleBlur("fullName")}
            onFocus={() => handleFieldFocus("fullName")}
            className={errors.fullName ? "border-red-500" : ""}
            aria-invalid={!!errors.fullName}
          />
          {errors.fullName && (
            <span className="text-red-500 text-sm">{errors.fullName}</span>
          )}
        </div>
        <div className="flex flex-col gap-3">
          <span className="font-medium text-neutral-700 text-body-lg">
            Email
          </span>
          <Input
            placeholder="Enter email id"
            type="email"
            value={email}
            onChange={handleEmailChange}
            onBlur={() => handleBlur("email")}
            onFocus={() => handleFieldFocus("email")}
            className={errors.email ? "border-red-500" : ""}
            aria-invalid={!!errors.email}
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email}</span>
          )}
        </div>
        <div className="flex flex-col gap-3">
          <span className="font-medium text-neutral-700 text-body-lg">
            Phone Number
          </span>
          <div className="flex gap-2">
            <Select value={selectedCountry} onValueChange={handleCountryChange}>
              <SelectTrigger className="w-fit">
                <SelectValue>
                  <div className="flex items-center gap-2">
                    <span>{selectedCountryData?.flag}</span>
                    <span>{selectedCountryData?.phoneCode}</span>
                  </div>
                </SelectValue>
              </SelectTrigger>
              <SelectContent className="max-h-[300px] overflow-y-auto">
                {countries.map((country) => (
                  <SelectItem key={country.name} value={country.phoneCode}>
                    <div className="flex items-center gap-2">
                      <span>{country.flag}</span>
                      <span>{country.phoneCode}</span>
                      <span className="text-neutral-500 text-sm">
                        {country.name}
                      </span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Input
              placeholder="Enter phone number"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              onBlur={() => handleBlur("phoneNumber")}
              onFocus={() => handleFieldFocus("phoneNumber")}
              className={errors.phoneNumber ? "border-red-500" : ""}
              maxLength={selectedCountryData?.maxNumberLength || 10}
              aria-invalid={!!errors.phoneNumber}
            />
          </div>
          {errors.phoneNumber && (
            <span className="text-red-500 text-sm">{errors.phoneNumber}</span>
          )}
        </div>
      </div>
      <Button className="flex w-full" type="submit" disabled={isSubmitting}>
        {isSubmitting
          ? "Processing..."
          : state?.ctaText
          ? state?.ctaText
          : "Book Your FREE Counseling Today"}
      </Button>
    </form>
  );
};

export default ContactStep1;
