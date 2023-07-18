/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                dmsans: ["DM Sans", "sans-serif"],
                roboto: ["Roboto", "sans-serif"],
                sans: ["Open sans", "sans-seirif"],
                poppins: ["Poppins", "sans-serif"],
            },
            width: {
                85: "335px",
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};