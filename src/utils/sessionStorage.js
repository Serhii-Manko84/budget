export const saveToStorage = (name, data) => {
  if (!window || !window.localStorage) {
    return;
  }
  localStorage.setItem(name, JSON.stringify(data));
};

export const getFormStorage = (name) => {
  if (!window || !window.localStorage) {
    return null;
  }
  try {
    return JSON.parse(localStorage.getItem(name));
  } catch (error) {
    console.error(error);

    return null;
  }
};
