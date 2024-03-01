import { withUt } from "uploadthing/tw";
const defaultTheme = require("tailwindcss/defaultTheme");

export default withUt({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Raleway", ...defaultTheme.fontFamily.sans],
      },
      backgroundColor: {
        bgBlack: "hsla(254, 0%, 0%, 1)",
      },
      backgroundImage: {
        "black-radial":
          "radial-gradient(at 0% 69%, hsla(322, 100%, 0%, 1) 0px, transparent 50%), radial-gradient(at 83% 71%, hsla(161, 93%, 30%, 1) 0px, transparent 50%)",
      },
    },
  },
  compilerOptions: {
    paths: {
      "@/fonts": ["./styles/fonts"],
    },
  },
  plugins: [],

  darkMode: "class",
});
