import React, { useEffect, useState } from "react";

// Components:
import RouteContainer from "./components/RouteContainer";
import Header from "./components/header/Header";
import DarkModeButton from "./components/DarkModeButton";

function App() {
  // Piece of state for dark/light mode
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark"); // give the entire <html> a class="dark"
    } else document.documentElement.classList.remove("dark");
  }, [theme]);

  return (
    <div className="App bg-rose-50" style={{ height: "100vh" }}>
      <Header />
      <DarkModeButton theme={theme} setTheme={setTheme} />
      <RouteContainer />
    </div>
  );
}

export default App;
