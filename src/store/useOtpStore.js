import { create } from "zustand";
import axios from "axios";
import { appConfig, ApiEndPoints } from "@/appConfig";

// Create the Zustand store with state and actions
const useOtpStore = create((set, get) => ({
  isOtpSent: false,
  isOtpVerified: false,
  isLoading: false,
  error: null,
  phoneNumber: "",
  countryCode: "",
  resendCooldown: null,

  // Add a setter method to properly update the state
  setState: (newState) => set((state) => ({ ...state, ...newState })),

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

// Export send OTP function
export const sendOtp = async (phoneNumber, countryCode) => {
  const fullPhone = `${countryCode}${phoneNumber}`;

  // Use the store's setState method directly
  useOtpStore.getState().setState({ isLoading: true, error: null });

  try {
    const response = await axios.post(
      `${appConfig.BASE_URL}${ApiEndPoints.OTP}/send`,
      {
        phoneNumber: fullPhone,
      }
    );

    if (response.data.success) {
      useOtpStore.getState().setState({
        isOtpSent: true,
        isLoading: false,
        phoneNumber,
        countryCode,
        resendCooldown: 30,
      });
      return true;
    } else {
      useOtpStore.getState().setState({
        isOtpSent: false,
        isLoading: false,
        error: response.data.message || "Failed to send OTP",
      });
      return false;
    }
  } catch (error) {
    useOtpStore.getState().setState({
      isOtpSent: false,
      isLoading: false,
      error: error.response?.data?.message || "Network error while sending OTP",
    });
    return false;
  }
};

// Export resend OTP function
export const resendOtp = async () => {
  const state = useOtpStore.getState();
  const { phoneNumber, countryCode } = state;

  if (!phoneNumber || !countryCode) {
    state.setState({ error: "Phone number information is missing" });
    return false;
  }

  const fullPhone = `${countryCode}${phoneNumber}`;

  state.setState({ isLoading: true, error: null });

  try {
    const response = await axios.post(
      `${appConfig.BASE_URL}${ApiEndPoints.OTP}/send`,
      {
        phoneNumber: fullPhone,
        resend: true,
      }
    );

    if (response.data.success) {
      state.setState({ isLoading: false, resendCooldown: 30 });
      return true;
    } else {
      state.setState({
        isLoading: false,
        error: response.data.message || "Failed to resend OTP",
      });
      return false;
    }
  } catch (error) {
    state.setState({
      isLoading: false,
      error:
        error.response?.data?.message || "Network error while resending OTP",
    });
    return false;
  }
};

// Export verify OTP function
export const verifyOtp = async (otp) => {
  const state = useOtpStore.getState();
  const { phoneNumber, countryCode } = state;

  if (!phoneNumber || !countryCode) {
    state.setState({ error: "Phone number information is missing" });
    return false;
  }

  const fullPhone = `${countryCode}${phoneNumber}`;

  state.setState({ isLoading: true, error: null });

  try {
    const response = await axios.post(
      `${appConfig.BASE_URL}${ApiEndPoints.OTP}/verify`,
      {
        phoneNumber: fullPhone,
        otp,
      }
    );

    if (response.data.success) {
      state.setState({
        isOtpVerified: true,
        isLoading: false,
      });
      return true;
    } else {
      state.setState({
        isOtpVerified: false,
        isLoading: false,
        error: response.data.message || "Invalid OTP",
      });
      return false;
    }
  } catch (error) {
    state.setState({
      isOtpVerified: false,
      isLoading: false,
      error:
        error.response?.data?.message || "Network error while verifying OTP",
    });
    return false;
  }
};

// Export the entire store as default
export default useOtpStore;
