import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
      height: {
        // 'screen-box': 'calc(100vh - 8rem - 6rem - 2rem)', // Box 컴포넌트 전체 화면
        'screen-box': 'calc(var(--main-layout-height) - 2rem)', // Box 컴포넌트 전체 화면
      },
      minHeight: {
        'screen-main': 'var(--main-layout-height)',
      },
    },
  },
  plugins: [],
};
export default config;
