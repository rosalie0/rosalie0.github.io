import React, { useEffect, useState } from "react";

// Components:
import RouteContainer from "./components/RouteContainer";
import Header from "./components/header/Header";
import Homepage from "./components/Homepage";
import Projects from "./components/projects/Projects";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  // Piece of state for dark/light mode
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark"); // give the entire <html> a class="dark"
    } else document.documentElement.classList.remove("dark");
  }, [theme]);

  return (
    <div className="bg-rose-50 dark:bg-stone-900">
      <Header theme={theme} setTheme={setTheme} />
      <About />
      <Projects />
      <Homepage />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
