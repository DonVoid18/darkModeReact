import { useReducer } from "react";
import ThemeContext from "./ThemeContext";
// dark
const darkTheme = {
  body: "#1c1c1c",
  icon: "#ffffffca",
  text: "white",
  tableColor: "#0c0c0c",
  cellColor: "#1c1c1c",
  textColor: "white",
};
// light
const lightTheme = {
  body: "#fff",
  icon: "#1c1c1c",
  text: "#1c1c1c",
  tableColor: "#f9fafb",
  cellColor: "#e9ecef",
  textColor: "black",
};
const initialTheme = {
  theme: "light",
  isDarkTheme: false,
};
function reducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case "SET_THEME":
      return {
        ...state,
        ...payload,
      };
    default:
      return {
        ...state,
      };
  }
}
const ThemeState = (props) => {
  const [state, dispatch] = useReducer(reducer, initialTheme);

  const changeTheme = (value) => {
    dispatch({ type: "SET_THEME", payload: value });
  };

  return (
    <ThemeContext.Provider
      value={{
        themeValue: state.isDarkTheme ? darkTheme : lightTheme,
        isDarkTheme: state.isDarkTheme,
        changeTheme,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeState;
