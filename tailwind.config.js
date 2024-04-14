/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  // darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: "poppins"
      },
      colors: {
        primary: "#0a0a0a",
      },
      backgroundImage: {
        //   site: "url('/bg_site.jpg')",
        //   site_dark: "url('/bg_site_dark.jpg')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}