/** @type {import('tailwindcss').Config} */
module.exports = {
  // If you want to support toggling dark mode manually instead of relying on the operating system preference,
  // use the class strategy instead of the media strategy.
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        noto: ["Noto Sans Japanese", "serif"],
        frag: ["Fragment Mono", "monospace"],
        source: ["Source Sans Pro", "sans-serif"],
        neon: ["Tilt Neon", "sans-serif"],
        comfortaa: ["Comfortaa", "serif"],
      },
      //   colors: {
      //     "green-light": "#A7F3D0", //emerald-300
      //     "green-mid": "#059669", //emerald-600
      //     "green-dark": "#064E3B", //emerald-900
      //     secondary: "#CA8A04", //amber-600
      //     "text-base": "#E11D48", //rose-600
      //   },
    },
  },
  plugins: [],
};
