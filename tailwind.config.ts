import type { Config } from 'tailwindcss'
//@ts-ignore
import merzaTheme from '@merzaui/react/tailwind'

const externalPathPrefix = process.env.NODE_ENV === 'development' ? '../..' : '.'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    `${externalPathPrefix}/node_modules/@merzaui/react/dist/**/*.{js,ts,jsx,tsx}`,
  ],
  ...merzaTheme,
  plugins: [require('@tailwindcss/typography')],
}
export default config
