import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/componentes/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "vermelhoForte":"#A60832",
        "vermelhoFraco":"#F24B78",
        "amarelo":"#F2EA7E",
        "marrom":"#A66844",
        "rosa1":"#F299B1",
        "rosa2":"#BF788B",
        "cinza":"#818DA6"
      },
    },
    
  },
  plugins: [],
};
export default config;
