import React, { useState, useEffect, useRef } from "react";
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
import useOtpStore from "@/store/useOtpStore";

const tempDomains = [
  "10minutemail.com",
  "mailinator.com",
  "tempmail.com",
  "guerrillamail.com",
  "throwawaymail.com",
  "dispostable.com",
  "getnada.com",
  "yopmail.com",
  "moakt.com",
  "sharklasers.com",
  "maildrop.cc",
  "fakeinbox.com",
  "trashmail.com",
  "temp-mail.org",
  "emailondeck.com",
  "mintemail.com",
  "spamgourmet.com",
  "mytemp.email",
  "mailcatch.com",
  "easytrashmail.com",
];

const ContactStep1 = ({ initialData = {}, onSubmit }) => {
  const location = useLocation();
  const state = location.state;

  const [selectedCountry, setSelectedCountry] = useState(
    initialData.countryCode || "+91"
  );
  const [phoneNumber, setPhoneNumber] = useState(initialData.phoneNumber || "");
  const [fullName, setFullName] = useState(initialData.fullName || "");
  const [email, setEmail] = useState(initialData.email || "");

  // Create refs for the input elements to fix cursor positioning
  const fullNameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneNumberRef = useRef(null);

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

  const { setState, isLoading, isOtpSent, error } = useOtpStore();

  const selectedCountryData = countries.find(
    (country) => country.phoneCode === selectedCountry
  );

  useEffect(() => {
    if (isLoading) {
      setIsSubmitting(true);
    }
    if (isOtpSent || error) {
      setIsSubmitting(false);
    }
  }, [isLoading, isOtpSent, error]);

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
    if (name.trim().length > 59) return "Maximum character limit reached";
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(name))
      return "Name can only contain letters and spaces";
    return "";
  };

  const validateEmail = (email) => {
    if (!email.trim()) return "Email is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return "Enter a valid email address";

    const domain = email.split("@")[1]?.toLowerCase();
    if (tempDomains.some((temp) => domain.includes(temp)))
      return "Temporary email addresses are not allowed";

    return "";
  };

  const validatePhoneNumber = (phoneNumber) => {
    if (!touched.phoneNumber && !phoneNumber) return "";

    if (!phoneNumber.trim()) return "Phone number is required";

    if (!/^\d+$/.test(phoneNumber)) return "Enter a valid phone number";

    // Strip leading zero for validation against maximum length
    let numberToValidate = phoneNumber;
    if (phoneNumber.startsWith("0")) {
      numberToValidate = phoneNumber.substring(1);
    }

    const maxLength = selectedCountryData?.maxNumberLength || 10;

    // Check if the normalized number exceeds max length
    if (numberToValidate.length > maxLength) {
      return `Enter a valid phone number`;
    }

    // Check if the normalized number is too short
    if (numberToValidate.length < maxLength)
      return "Enter a valid phone number";

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

    // Update error state immediately if field has been touched
    if (touched.fullName) {
      setErrors((prev) => ({
        ...prev,
        fullName: validateFullName(value),
      }));
    }

    // Clear any backend error messages
    if (error) {
      setState({ error: null });
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    // Update error state immediately if field has been touched
    if (touched.email) {
      setErrors((prev) => ({
        ...prev,
        email: validateEmail(value),
      }));
    }

    // Clear any backend error messages
    if (error) {
      setState({ error: null });
    }
  };

  const handlePhoneNumberChange = (e) => {
    // Get the actual value from the input event
    const value = e.target.value;

    // Only continue if input is empty or contains only digits
    if (value === "" || /^\d*$/.test(value)) {
      // Display the full number to the user (including leading zero)
      setPhoneNumber(value);

      // Update error state if the field has been touched
      if (touched.phoneNumber) {
        setErrors((prev) => ({
          ...prev,
          phoneNumber: validatePhoneNumber(value),
        }));
      }

      // Clear any backend error messages
      if (error) {
        setState({ error: null });
      }
    }
  };

  const handleBlur = (field) => {
    // Mark field as touched
    setTouched((prev) => ({
      ...prev,
      [field]: true,
    }));

    // Validate the field on blur
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

    // Update errors
    setErrors((prev) => ({
      ...prev,
      [field]: errorMessage,
    }));
  };

  const handleCountryChange = (value) => {
    setSelectedCountry(value);

    // Find the country data for the new selection
    const newSelectedCountryData = countries.find(
      (country) => country.phoneCode === value
    );

    // Get the max length for phone numbers in the selected country
    const maxLength = newSelectedCountryData?.maxNumberLength || 10;

    // If the phone number exceeds the new max length, adjust it
    // Account for potential leading zero
    let numberToCheck = phoneNumber;
    let hasLeadingZero = false;

    if (phoneNumber.startsWith("0")) {
      numberToCheck = phoneNumber.substring(1);
      hasLeadingZero = true;
    }

    if (numberToCheck.length > maxLength) {
      // Truncate while preserving the leading zero in the display
      const truncatedNumber = hasLeadingZero
        ? "0" + numberToCheck.slice(0, maxLength)
        : numberToCheck.slice(0, maxLength);

      setPhoneNumber(truncatedNumber);

      // Revalidate if the field has been touched
      if (touched.phoneNumber) {
        setErrors((prev) => ({
          ...prev,
          phoneNumber: validatePhoneNumber(truncatedNumber),
        }));
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Mark all fields as touched
    setTouched({
      fullName: true,
      email: true,
      phoneNumber: true,
    });

    // Validate all fields
    const nameError = validateFullName(fullName);
    const emailError = validateEmail(email);
    const phoneError = validatePhoneNumber(phoneNumber);

    // Update all errors
    setErrors({
      fullName: nameError,
      email: emailError,
      phoneNumber: phoneError,
    });

    // Don't proceed if there are validation errors
    if (nameError || emailError || phoneError) {
      return;
    }

    // Set submitting state
    setIsSubmitting(true);

    try {
      // Normalize phone number by removing leading zero before submission
      let normalizedPhone = phoneNumber;
      if (phoneNumber.startsWith("0")) {
        normalizedPhone = phoneNumber.substring(1);
      }

      // Call the onSubmit function with form data
      await onSubmit({
        fullName,
        email,
        phoneNumber: normalizedPhone, // Send normalized number without leading zero
        countryCode: selectedCountry,
      });
    } catch (error) {
      console.error("Form submission error:", error);
      // Make sure to reset submitting state on error
      setIsSubmitting(false);
    }
  };

  // Fix for cursor position in input fields
  const handleInputClick = (e, inputRef) => {
    // Don't manipulate cursor if there's a text selection
    if (e.target.selectionStart !== e.target.selectionEnd) {
      return;
    }

    // Get the clicked position
    const clickPosition = e.target.selectionStart;

    // Use setTimeout to ensure this runs after React's event handling
    setTimeout(() => {
      if (inputRef.current) {
        // Set cursor position to where the user clicked
        inputRef.current.setSelectionRange(clickPosition, clickPosition);
      }
    }, 0);
  };

  // Check if form has errors
  const hasErrors = Object.values(errors).some((error) => !!error);

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit} noValidate>
      <div className="flex flex-col gap-4 md:gap-9">
        {/* Full Name Field */}
        <div className="flex flex-col gap-3">
          <span className="font-medium text-neutral-700 text-body-lg">
            Full Name
          </span>
          <Input
            ref={fullNameRef}
            placeholder="Enter full name"
            value={fullName}
            onChange={handleFullNameChange}
            onBlur={() => handleBlur("fullName")}
            onFocus={() => handleFieldFocus("fullName")}
            onClick={(e) => handleInputClick(e, fullNameRef)}
            className={
              touched.fullName && errors.fullName ? "border-red-500" : ""
            }
            aria-invalid={touched.fullName && !!errors.fullName}
          />
          {touched.fullName && errors.fullName && (
            <span className="text-red-500 text-sm">{errors.fullName}</span>
          )}
        </div>

        {/* Email Field */}
        <div className="flex flex-col gap-3">
          <span className="font-medium text-neutral-700 text-body-lg">
            Email
          </span>
          <Input
            ref={emailRef}
            placeholder="Enter email id"
            type="email"
            value={email}
            onChange={handleEmailChange}
            onBlur={() => handleBlur("email")}
            onFocus={() => handleFieldFocus("email")}
            onClick={(e) => handleInputClick(e, emailRef)}
            className={touched.email && errors.email ? "border-red-500" : ""}
            aria-invalid={touched.email && !!errors.email}
          />
          {touched.email && errors.email && (
            <span className="text-red-500 text-sm">{errors.email}</span>
          )}
        </div>

        {/* Phone Number Field */}
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
              ref={phoneNumberRef}
              placeholder="Enter phone number"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              onBlur={() => handleBlur("phoneNumber")}
              onFocus={() => handleFieldFocus("phoneNumber")}
              onClick={(e) => handleInputClick(e, phoneNumberRef)}
              className={
                touched.phoneNumber && errors.phoneNumber
                  ? "border-red-500"
                  : ""
              }
              aria-invalid={touched.phoneNumber && !!errors.phoneNumber}
            />
          </div>
          {touched.phoneNumber && errors.phoneNumber && (
            <span className="text-red-500 text-sm">{errors.phoneNumber}</span>
          )}
        </div>
      </div>

      {/* Backend Error Message */}
      {error && <span className="text-red-500 text-sm">{error}</span>}

      {/* Submit Button */}
      <Button
        className="flex w-full"
        type="submit"
        disabled={isSubmitting || hasErrors}
      >
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
