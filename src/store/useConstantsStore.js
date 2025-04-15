import { create } from "zustand";
import axios from "axios";
import { ApiEndPoints, appConfig } from "@/appConfig";

const useConstantsStore = create((set) => ({
  universityLogos: null,
  isLoading: false,
  error: null,
}));

const { setState } = useConstantsStore;

export const getS3 = async (data) => {
  console.log(data, "data");
  setState({ isLoading: true, error: null });

  try {
    const response = await axios.post(
      `${appConfig.BASE_URL}${ApiEndPoints.getS3}`,
      data
    );

    if (response.data.success) {
      setState({
        universityLogos: response.data.data,
        isLoading: false,
      });
      return true;
    } else {
      setState({
        isLoading: false,
        error: response.data.message || "Failed to get nrd",
      });
      return false;
    }
  } catch (error) {
    setState({
      isLoading: false,
      error:
        error.response?.data?.message || "Network error while getting Logos",
    });
    return false;
  }
};

export default useConstantsStore;
