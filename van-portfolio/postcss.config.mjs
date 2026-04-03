/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    '@tailwindcss/postcss': {}, // Thay đổi dòng này
    autoprefixer: {},
  },
};

export default config;