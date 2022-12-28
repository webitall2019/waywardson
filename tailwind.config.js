/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                "text-white": "#fff",
                "text-grey": "#A0A0A0",
                "text-red": "#F60205",
                "text-white-contrast": "#9BA9B4",
                "text-dark-grey": "#25282C",
                "text-light-grey": "#6B7280",
                "nav-item-light": "#C5D2DC",
            },
            fontFamily: {
                sans: ["Inter"],
                body: "Inter",
            },
            backgroundColor: {
                "cta-blue": "#1D2EC6",
                "card-background": "#25282C",
            },
        },
    },
    plugins: [],
};
