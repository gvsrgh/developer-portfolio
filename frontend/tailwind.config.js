/** @type {import('tailwindcss').Config} *//** @type {import('tailwindcss').Config} */

module.exports = {module.exports = {

  content: [  content: [

    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',

    './src/components/**/*.{js,ts,jsx,tsx,mdx}',    './src/components/**/*.{js,ts,jsx,tsx,mdx}',

    './src/app/**/*.{js,ts,jsx,tsx,mdx}',    './src/app/**/*.{js,ts,jsx,tsx,mdx}',

  ],  ],

  theme: {  theme: {

    extend: {    extend: {

      colors: {      colors: {

        background: 'var(--background)',        background: 'var(--background)',

        foreground: 'var(--foreground)',        foreground: 'var(--foreground)',

      },      },

    },      fontFamily: {

  },        sans: 'var(--font-sans)',

  plugins: [],        mono: 'var(--font-mono)',

  darkMode: 'class',      },

}    },
  },
  plugins: [],
}