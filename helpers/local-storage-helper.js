export const setToLocalSotrage = (key, value) =>
  localStorage.setItem(key, value);

export const getItemFromLocalStorage = (key) => localStorage.getItem(key);

export const removeItemFromLocalStorage = (key) => localStorage.removeItem(key);

export const clearLocalStorage = (key) => localStorage.clear();

export const logoutUser = clearLocalStorage;

export const setNewUser = (userName,force) => {
    const previousUserName = getGuestData().userName;
  if ((previousUserName && force) || !previousUserName) {
    setToLocalSotrage("userName", userName);
    setToLocalSotrage("points", 0);
    setToLocalSotrage("isNewUser", true);
  }
};

export const getGuestData = () => {
  return {
    userName: getItemFromLocalStorage("userName"),
    points: getItemFromLocalStorage("points"),
    isNewUser: getItemFromLocalStorage("isNewUser"),
  };
};


export const setUserPoints = (gainedPoints) => {
  const currentPoints = Number(getItemFromLocalStorage("points"))
  setToLocalSotrage("points", (!currentPoints || currentPoints === "NaN" ? 0 : currentPoints) + gainedPoints)
} 