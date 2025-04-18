import { create } from "zustand";
import axios from "axios";
import { ApiEndPoints, appConfig } from "@/appConfig";

const useUserStore = create((set) => ({
  users: [],
  total: 0,
  isLoading: false,
  error: null,
  currentPage: 1,
  totalPages: 1,
  searchTerm: "",
  sortField: "created_at",
  sortOrder: "desc",

  // Add setState method to the store itself
  setState: (newState) => set((state) => ({ ...state, ...newState })),
}));

export const fetchUsers = async (params = {}) => {
  const setState = useUserStore.getState().setState;
  setState({ isLoading: true, error: null });

  const {
    page = 1,
    perPage = 10,
    search = "",
    sortField = "created_at",
    sortOrder = "desc",
  } = params;

  try {
    const response = await axios.get(
      `${appConfig.BASE_URL}${ApiEndPoints.users}`,
      {
        params: {
          page,
          perPage,
          search,
          sortField,
          sortOrder,
        },
      }
    );

    if (response.data.success) {
      setState({
        users: response.data.data.users,
        total: response.data.data.total,
        totalPages: Math.ceil(response.data.data.total / perPage),
        currentPage: page,
        searchTerm: search,
        sortField,
        sortOrder,
        isLoading: false,
      });
      return response.data.data;
    } else {
      setState({
        isLoading: false,
        error: response.data.message || "Failed to fetch users",
      });
      return null;
    }
  } catch (error) {
    setState({
      isLoading: false,
      error: error.response?.data?.message || "Network error",
    });
    return null;
  }
};

export const getUserById = async (id) => {
  const setState = useUserStore.getState().setState;
  setState({ isLoading: true, error: null });

  try {
    const response = await axios.get(
      `${appConfig.BASE_URL}${ApiEndPoints.users}/${id}`
    );

    if (response.data.success) {
      setState({ isLoading: false });
      return response.data.data.user;
    } else {
      setState({
        isLoading: false,
        error: response.data.message || "Failed to fetch user",
      });
      return null;
    }
  } catch (error) {
    setState({
      isLoading: false,
      error: error.response?.data?.message || "Network error",
    });
    return null;
  }
};

export default useUserStore;
