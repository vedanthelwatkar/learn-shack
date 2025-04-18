import { create } from "zustand";
import axios from "axios";
import { ApiEndPoints, appConfig } from "@/appConfig";

const useContactStore = create((set) => ({
  data: null,
  success: false,
  isLoading: false,
  error: null,

  users: null,
}));

const { setState } = useContactStore;

export const postContactInfo = async (data) => {
  setState({ isLoading: true, error: null });

  try {
    const response = await axios.post(
      `${appConfig.BASE_URL}${ApiEndPoints.contact}`,
      data
    );

    if (response.data.success) {
      setState({
        data: response.data.data,
        success: true,
        isLoading: false,
      });
      return true;
    } else {
      setState({
        isLoading: false,
        error: response.data.message || "Failed to add details",
      });
      return false;
    }
  } catch (error) {
    setState({
      isLoading: false,
      error: error.response?.data?.message || "Network error",
    });
    return false;
  }
};

export default useContactStore;
