/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "22rem",
      },
      colors: {
        brand: {
          primary: "#60279e",
          secondary: "#efe9f5",
        },
        neutral: {
          0: "#ffffff",
          50: "#f8f8f8",
          100: "#f5f5f5",
          200: "#e5e5e5",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#0a0a0a",
        },
        system: {
          success: {
            100: "#dcfce7",
            600: "#16a34a",
          },
          info: {
            100: "#dbeafe",
            600: "#2563eb",
          },
          pending: {
            100: "#fef9c3",
            600: "#ca8a04",
          },
          error: {
            100: "#fee2e2",
            600: "#dc2626",
          },
        },
      },
      borderRadius: {
        xs: "var(--radius-xs)",
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
        "2xl": "var(--radius-2xl)",
      },
      fontFamily: {
        heading: ["Figtree", "sans-serif"],
        body: ["DM Sans", "sans-serif"],
        sofia: ["Sofia", "sans-serif"],
      },
      fontSize: {
        h1: ["var(--font-size-h1)", "120%"],
        h2: ["var(--font-size-h2)", "120%"],
        h3: ["var(--font-size-h3)", "120%"],
        h4: ["var(--font-size-h4)", "120%"],
        h5: ["var(--font-size-h5)", "120%"],
        h6: ["var(--font-size-h6)", "120%"],
        "body-2xl": ["var(--font-size-body-2xl)", "140%"],
        "body-xl": ["var(--font-size-body-xl)", "140%"],
        "body-lg": ["var(--font-size-body-lg)", "140%"],
        "body-md": ["var(--font-size-body-md)", "140%"],
        "body-sm": ["var(--font-size-body-sm)", "140%"],
        "body-xs": ["var(--font-size-body-xs)", "140%"],
      },
      fontWeight: {
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      letterSpacing: {
        heading: "-2%",
        body: "-1%",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      stroke: {
        "2xl": "var(--stroke-2xl)",
        xl: "var(--stroke-xl)",
        lg: "var(--stroke-lg)",
        md: "var(--stroke-md)",
        sm: "var(--stroke-sm)",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({ addBase }) {
      addBase({
        // 👇 Default (mobile-first, applies to phones and up)
        ":root": {
          "--radius-xs": "4px",
          "--radius-sm": "6px",
          "--radius-md": "8px",
          "--radius-lg": "12px",
          "--radius-xl": "16px",
          "--radius-2xl": "100px",

          "--font-size-h1": "38px",
          "--font-size-h2": "36px",
          "--font-size-h3": "32px",
          "--font-size-h4": "24px",
          "--font-size-h5": "22px",
          "--font-size-h6": "20px",
          "--font-size-body-2xl": "18px",
          "--font-size-body-xl": "16px",
          "--font-size-body-lg": "14px",
          "--font-size-body-md": "12px",
          "--font-size-body-sm": "12px",
          "--font-size-body-xs": "8px",

          "--stroke-2xl": "2px",
          "--stroke-xl": "2px",
          "--stroke-lg": "1.5px",
          "--stroke-md": "1px",
          "--stroke-sm": "0.5px",
        },

        // 👇 Override for laptops and up (min-width: 1024px)
        "@media (min-width: 640px)": {
          ":root": {
            "--radius-xs": "4px",
            "--radius-sm": "8px",
            "--radius-md": "12px",
            "--radius-lg": "16px",
            "--radius-xl": "24px",
            "--radius-2xl": "100px",

            "--font-size-h1": "60px",
            "--font-size-h2": "52px",
            "--font-size-h3": "48px",
            "--font-size-h4": "40px",
            "--font-size-h5": "32px",
            "--font-size-h6": "24px",
            "--font-size-body-2xl": "20px",
            "--font-size-body-xl": "18px",
            "--font-size-body-lg": "16px",
            "--font-size-body-md": "14px",
            "--font-size-body-sm": "12px",
            "--font-size-body-xs": "10px",

            "--stroke-2xl": "4px",
            "--stroke-xl": "2px",
            "--stroke-lg": "1.5px",
            "--stroke-md": "1px",
            "--stroke-sm": "0.5px",
          },
        },
      });
    },
  ],
};
