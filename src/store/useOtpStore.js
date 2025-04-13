import { create } from "zustand";
import axios from "axios";
import { appConfig, ApiEndPoints } from "@/appConfig";

const useOtpStore = create((set, get) => ({
  isOtpSent: false,
  isOtpVerified: false,
  isLoading: false,
  error: null,
  phoneNumber: "",
  countryCode: "",

  resetOtpState: () =>
    set({
      isOtpSent: false,
      isOtpVerified: false,
      isLoading: false,
      error: null,
      phoneNumber: "",
      countryCode: "",
    }),
}));

const { setState, getState } = useOtpStore;

export const sendOtp = async (phoneData) => {
  const { phoneNumber, countryCode, email, fullName } = phoneData;

  setState({ isLoading: true, error: null });

  try {
    const response = await axios.post(
      `${appConfig.BASE_URL}${ApiEndPoints.OTP}/send`,
      {
        phoneNumber,
        countryCode,
        email,
        fullName,
      }
    );

    if (response.data.success) {
      setState({
        isOtpSent: true,
        isLoading: false,
        phoneNumber,
        countryCode,
      });
      return true;
    } else {
      setState({
        isOtpSent: false,
        isLoading: false,
        error: response.data.message || "Failed to send OTP",
      });
      return false;
    }
  } catch (error) {
    setState({
      isOtpSent: false,
      isLoading: false,
      error: error.response?.data?.message || "Network error while sending OTP",
    });
    return false;
  }
};

export const resendOtp = async () => {
  const { phoneNumber, countryCode } = getState();

  if (!phoneNumber || !countryCode) {
    setState({ error: "Phone number information is missing" });
    return false;
  }

  setState({ isLoading: true, error: null });

  try {
    const response = await axios.post(
      `${appConfig.BASE_URL}${ApiEndPoints.OTP}/send`,
      {
        phoneNumber,
        countryCode,
        resend: true,
      }
    );

    if (response.data.success) {
      setState({ isLoading: false });
      return true;
    } else {
      setState({
        isLoading: false,
        error: response.data.message || "Failed to resend OTP",
      });
      return false;
    }
  } catch (error) {
    setState({
      isLoading: false,
      error:
        error.response?.data?.message || "Network error while resending OTP",
    });
    return false;
  }
};

export const verifyOtp = async (otp) => {
  const { phoneNumber, countryCode } = getState();

  if (!phoneNumber || !countryCode) {
    setState({ error: "Phone number information is missing" });
    return false;
  }

  setState({ isLoading: true, error: null });

  try {
    const response = await axios.post(
      `${appConfig.BASE_URL}${ApiEndPoints.OTP}/verify`,
      {
        phoneNumber,
        countryCode,
        otp,
      }
    );

    if (response.data.success) {
      setState({
        isOtpVerified: true,
        isLoading: false,
      });
      return true;
    } else {
      setState({
        isOtpVerified: false,
        isLoading: false,
        error: response.data.message || "Invalid OTP",
      });
      return false;
    }
  } catch (error) {
    setState({
      isOtpVerified: false,
      isLoading: false,
      error:
        error.response?.data?.message || "Network error while verifying OTP",
    });
    return false;
  }
};

export default useOtpStore;
