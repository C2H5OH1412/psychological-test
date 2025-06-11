// tailwind.config.js
module.exports = {
    content: [
      "./src/**/*.{js,ts,jsx,tsx}", // 加上這行！讓 Tailwind 找到你 src 內所有檔案
    ],
    theme: {
      extend: {
        fontFamily: {
          myfont: ['MyFont', 'sans-serif'],
        },
      },
    },
    plugins: [],
  };
  