module.exports = {
    content: [
      './app/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    plugins: [require('daisyui')],
    theme: {
      extend: {
        spacing: {
          '128': '32rem',
          '196': '48rem',
          '256': '64rem',
        }
      }
    }
  };
  