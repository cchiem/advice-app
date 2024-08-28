/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        LightCyan: "var(--Light-Cyan)",
        NeonGreen: "var(--Neon-Green)",
        GrayishBlue: "var(--Grayish-Blue)",
        DarkGrayishBlue: "var(--Dark-Grayish-Blue)",
        DarkBlue: "var(--Dark-Blue)"
      }
    },
  },
  plugins: [

  ],
}