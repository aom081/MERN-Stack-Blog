import { Cookies } from "react-cookie";
const cookies = new Cookies();

const getToken = () => {
  const user = getUser();
  return user?.accessToken || null;
};

const getUser = () => {
  const stored = cookies.get("user");
  if (!stored) return null;
  // Handle both plain object (if react-cookie parsed it) and JSON string
  if (typeof stored === "object") return stored;
  try {
    return JSON.parse(stored);
  } catch {
    return null;
  }
};

const removeUser = () => {
  cookies.remove("user", { path: "/" });
};

const setUser = (user) => {
  cookies.set(
    "user",
    JSON.stringify({
      id: user?.id,
      username: user?.username,
      accessToken: user?.accessToken,
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
