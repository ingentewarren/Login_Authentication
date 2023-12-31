/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        fontSize: {
            xs: ['12px', '16px'],
            sm: ['14px', '20px'],
            base: ['16px', '19.5px'],
            lg: ['18px', '21.94px'],
            xl: ['20px', '24.38px'],
            '2xl': ['24px', '29.26px'],
            '3xl': ['28px', '50px'],
            '4xl': ['48px', '58px'],
            '8xl': ['96px', '106px']
        },
        extend: {
            fontFamily: {
                palanquin: ['Palanquin', 'sans-serif'],
                montserrat: ['Montserrat', 'sans-serif'],
                poppins: ['Poppins', 'sans-serif'],
                finger_paint: ['Finger Point', 'cursive'],
            },
            colors: {
                'primary': "#ECEEFF",
                "coral-red": "#FF6452",
                "slate-gray": "#6D6D6D",
                "pale-blue": "#F5F6FF",
                "white-400": "rgba(255, 255, 255, 0.80)"
            },
            boxShadow: {
                '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
            },
            screens: {
                'tablet': '640px',
                // => @media (min-width: 640px) { ... }

                'laptop': '1024px',
                // => @media (min-width: 1024px) { ... }

                'desktop': '1280px',
                // => @media (min-width: 1280px) { ... }
            },
            opacity: {
                '10': '0.1',
                '20': '0.2',
                '95': '0.95',
            },
        },
    },
    plugins: [],
}