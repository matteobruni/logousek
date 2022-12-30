export type UserData = {
  userName: string | null,
  points: string | null,
  isNewUser: string | null,
}

export const setToLocalSotrage = (key: string, value: string | number | boolean) => {
  const newValue = typeof value === "string" ? value : typeof value === "number" ? value.toString() : ""
  localStorage.setItem(key, newValue);
}

export const getItemFromLocalStorage = (key: string) => localStorage.getItem(key);

export const removeItemFromLocalStorage = (key: string) => localStorage.removeItem(key);

export const clearLocalStorage = () => localStorage.clear();

export const logoutUser = clearLocalStorage;

export const setNewUser = (userName: string | number | boolean,force?: boolean) => {
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


export const setUserPoints = (gainedPoints: number) => {
  const currentPoints = Number(getItemFromLocalStorage("points"))
  setToLocalSotrage("points", (!currentPoints ? 0 : currentPoints) + gainedPoints)
} 