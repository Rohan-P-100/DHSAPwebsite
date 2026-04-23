/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  theme: {
    extend: {
      colors: {
        /** Deepest brand navy — #112249 */
        ink: {
          DEFAULT: "#112249",
          muted: "#162f54",
          soft: "#1c3d6d",
        },
        /** Mid blue — #3b5b83 */
        sea: {
          DEFAULT: "#3b5b83",
          deep: "#0f1f3d",
          bright: "#4d6f9a",
          /** Muted light blue for small caps on dark (tint of #81bde5) */
          mist: "#a3d0ef",
        },
        /** Body / UI text on dark backgrounds */
        frost: "#edf6fc",
        /** Accent — #81bde5 */
        accent: "#81bde5",
      },
      fontFamily: {
        display: ['"League Spartan"', "system-ui", "sans-serif"],
        sans: ['"Quicksand"', "system-ui", "sans-serif"],
        label: ['"Lovelo"', '"League Spartan"', "system-ui", "sans-serif"],
        alt: ['"Glacial Indifference"', '"Quicksand"', "system-ui", "sans-serif"],
        script: ['"Brittany"', "cursive"],
      },
      maxWidth: {
        /** ~1440px — wider default content than max-w-6xl */
        page: "90rem",
      },
      boxShadow: {
        glow: "0 0 80px -20px rgba(129, 189, 229, 0.45)",
        card: "0 22px 55px -24px rgba(17, 34, 73, 0.1)",
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, rgba(17, 34, 73, 0) 0%, rgba(17, 34, 73, 0.88) 55%, rgba(17, 34, 73, 1) 100%), radial-gradient(ellipse 80% 50% at 50% -20%, rgba(129, 189, 229, 0.2), transparent)",
        noise:
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease-out forwards",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(8px)" },
        },
      },
    },
  },
  plugins: [],
};
