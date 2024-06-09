import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./node_modules/flowbite-react/lib/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        topBarColor: '#05542C',
        navBarColor:'#EDEDCB',
        rejoignezNous:"#DB9833",
        newTopBar: "#EA4335",
        statisticLandingPage: "#F59300",
        backgroundStatistic: "#A8DCB6",
    },
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
export default config;