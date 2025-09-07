// localStorage.js
export const saveState = (state) => {
  try {
    localStorage.setItem("reduxState", JSON.stringify(state));
  } catch (err) {
    console.error("Could not save state", err);
  }
};

export const loadState = () => {
  try {
    const state = localStorage.getItem("reduxState");
    return state ? JSON.parse(state) : undefined;
  } catch (err) {
    console.error("Could not load state", err);
    return undefined;
  }
};
