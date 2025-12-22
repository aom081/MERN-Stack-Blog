import { Cookies } from "react-cookie";
const cookies = new Cookies();

const getToken = () => {
  const user = getUser();
  return user?.accessToken || null;
};

const getUser = () => {
  const user = cookies.get("user");
  return user || null;
};

const removeUser = () => {
  cookies.remove("user", { path: "/" });
};

const setUser = (user) => {
  cookies.set(
    "user",
    JSON.stringify({
      id: user.id,
      Username: user.Username,
      accessToken: user.accessToken,
    })
  );
};

const tokenService = {
  getToken,
  getUser,
  removeUser,
  setUser,
};

export default tokenService;
