import api from "./api";
import tokenService from "./token.service";
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api/v1";

const register = (Username, password) => {
  return api.post(`${API_URL}/user/register`, { Username, password });
};

const login = async (Username, password) => {
  const response = await api.post(`${API_URL}/user/login`, {
    Username,
    password,
  });
  const { status, data } = response;
  if (status === 200) {
    if (data?.accessToken) {
      tokenService.setUser(data);
    }
  }
  return response.data;
};

const logout = () => {
  tokenService.removeUser();
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
