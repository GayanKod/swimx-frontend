/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'primary': '#45007A',
                'secondary': '#F3F4F6',
                'danger': '#EF4444',
                'success': '#10B981',
                'warning': '#F59E0B',
                'info': '#3B82F6',
            },
        },
    },
    plugins: [],
}
