import "./styles.css";
import { useDarkTheme } from "./hooks/useTheme";
export default function App() {
  const [darkMode, setDarkMode] = useDarkTheme(true);
  return (
    <div
      className="App"
      style={darkMode ? { background: "black" } : { background: "white" }}
    >
      <h1 style={darkMode ? { color: "white" } : { color: "black" }}>
        This is {darkMode ? "dark mode" : "light mode"}
      </h1>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "light" : "dark"}
      </button>
    </div>
  );
}
