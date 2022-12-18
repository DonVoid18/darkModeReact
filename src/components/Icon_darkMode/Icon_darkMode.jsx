import "./Icon_darkMode.css";
import MoonIcon from "./icons/MoonIcon";
import SunIcon from "./icons/SunIcon";
import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
function Icon_darkMode() {
  const { isDarkTheme, changeTheme } = useContext(ThemeContext);
  return (
    <div>
      <MoonIcon />
      <label className="toggle-switch">
        <input
          type="checkbox"
          checked={isDarkTheme}
          onChange={() => {
            changeTheme({
              theme: isDarkTheme ? "light" : "dark",
              isDarkTheme: !isDarkTheme,
            });
          }}
        />
        <span className="switch" />
      </label>
      <SunIcon />
    </div>
  );
}
export default Icon_darkMode;
