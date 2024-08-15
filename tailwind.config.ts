const colors = {
  accent: {
    main: "#29217A",
    light: "#4E4980",
    dark1: "#151050",
    dark2: "#170D40",
  },

  icon: {
    main: "#112439",
    light1: "#6D7F92",
    light2: "#151050",
  },

  gray: {
    50: "#F9F9F9",
    100: "#EDEDED",
    200: "#E0E0E0",
    300: "#BFBFBF",
    400: "#999999",
    500: "#737373",
    600: "#4D4D4D",
    700: "#262626",
  },

  primary: {
    bg: "#FFEEEE",
    main: "#FF6060",
    dark: "#F24545",
    logo: "#FE5353",
    light1: "#FFE3E3",
    light2: "#FFCCCC",
    50: "#FFF2F2",
    100: "#FFE5E5",
    200: "#FFCCCC",
    600: "#ff6060",
    700: "#E52E2E",
  },

  secondary: {
    bg: "#F7F3FF",
    main: "#CCAFFF",
    dark: "#6D29E9",
    middle: "#9D67FE",
    light: "#EADEFF",
  },

  border: {
    main: "#C6C6C8",
  },

  social: {
    google: "#F9F9F9",
    apple: "#000000",
    twitter: "#FFFFFF",
    naver: "#03C75A",
  },

  flowkit: {
    blue: "#0099ff",
  },
};

const spacingSize = 241;
const spacing = {
  auto: "auto",
  ...Object.fromEntries(
    Array.from({ length: spacingSize }, (_, i) => [
      i - (spacingSize >> 1),
      `${i - (spacingSize >> 1)}px`,
    ])
  ),
};

const zIndexSize = 101;
const zIndex = {
  auto: "auto",
  ...Object.fromEntries(Array.from({ length: zIndexSize }, (_, i) => [i, i])),
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors,

      borderRadius: {
        xxs: "4px",
        xs: "5px",
        sm: "8px",
        md: "10px",
        lg: "16px",
        xl: "20px",
      },

      fontSize: {
        ...Object.fromEntries(
          Array.from({ length: 40 }, (_, i) => [`${i + 10}`, `${i + 10}px`])
        ),

        h7: [
          18,
          {
            lineHeight: "24px",
            fontWeight: 700,
          },
        ],
        h6: [
          19,
          {
            lineHeight: "25px",
            fontWeight: 700,
          },
        ],
        h5: [
          20,
          {
            lineHeight: "26px",
            fontWeight: 700,
          },
        ],
        h4: [
          21,
          {
            lineHeight: "24px",
            fontWeight: 700,
          },
        ],
        h3: [
          22,
          {
            lineHeight: "30px",
            fontWeight: 700,
          },
        ],
        h2: [
          23,
          {
            lineHeight: "28px",
            fontWeight: 800,
          },
        ],
        h1: [
          24,
          {
            lineHeight: "30px",
            fontWeight: 800,
          },
        ],

        "sub-h3": [
          15,
          {
            lineHeight: "20px",
            fontWeight: 600,
          },
        ],
        "sub-h2": [
          16,
          {
            lineHeight: "20px",
            fontWeight: 600,
          },
        ],
        "sub-h1": [
          17,
          {
            lineHeight: "20px",
            fontWeight: 600,
          },
        ],

        label3: [
          11,
          {
            lineHeight: "14px",
            fontWeight: 400,
          },
        ],
        label2: [
          12,
          {
            lineHeight: "16px",
            fontWeight: 400,
          },
        ],
        label1: [
          12,
          {
            lineHeight: "16px",
            fontWeight: 500,
          },
        ],

        etc2: [
          9,
          {
            lineHeight: "14px",
            fontWeight: 200,
          },
        ],
        etc1: [
          10,
          {
            lineHeight: "14px",
            fontWeight: 300,
          },
        ],

        cta2: [
          15,
          {
            lineHeight: "20px",
            fontWeight: 700,
          },
        ],
        cta1: [
          16,
          {
            lineHeight: "20px",
            fontWeight: 700,
          },
        ],

        "sub-cta2": [
          12,
          {
            lineHeight: "16px",
            fontWeight: 600,
          },
        ],
        "sub-cta1": [
          13,
          {
            lineHeight: "16px",
            fontWeight: 600,
          },
        ],
        headline: [
          24,
          {
            lineHeight: "32px",
            fontWeight: 700,
          },
        ],
        "title-1": [
          18,
          {
            lineHeight: "26px",
            fontWeight: 700,
          },
        ],
        "title-2": [
          16,
          {
            lineHeight: "24px",
            fontWeight: 700,
          },
        ],
        "title-3": [
          16,
          {
            lineHeight: "24px",
            fontWeight: 600,
          },
        ],
        "title-4": [
          14,
          {
            lineHeight: "20px",
            fontWeight: 600,
          },
        ],
        "body-1": [
          16,
          {
            lineHeight: "24px",
            fontWeight: 400,
          },
        ],
        "body-2": [
          14,
          {
            lineHeight: "20px",
            fontWeight: 500,
          },
        ],
        "body-3": [
          14,
          {
            lineHeight: "20px",
            fontWeight: 400,
          },
        ],
        "body-4": [
          13,
          {
            lineHeight: "18px",
            fontWeight: 400,
          },
        ],
        "body-5": [
          13,
          {
            lineHeight: "18px",
            fontWeight: 400,
          },
        ],
        "caption-1": [
          13,
          {
            lineHeight: "18px",
            fontWeight: 700,
          },
        ],
        "caption-2": [
          12,
          {
            lineHeight: "16px",
            fontWeight: 500,
          },
        ],
      },

      fontWeight: {
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
      },

      margin: spacing,
      padding: spacing,

      spacing,

      zIndex,

      screens: {
        xs: { max: "575px" },
        sm: { min: "576px", max: "767px" },
        md: { min: "768px", max: "991px" },
        lg: { min: "992px", max: "1199px" },
        xl: { min: "1200px" },
      },

      boxShadow: {
        md: "0 2px 6px 0 rgba(0, 0, 0, 0.25)",
      },

      animation: {
        gradient: "gradient 1.7s infinite",
      },

      keyframes: {
        gradient: {
          "0%": { backgroundPosition: "100% 0%" },
          "50%, 100%": { backgroundPosition: "0% 0%" },
        },
      },
    },
  },
  plugins: [],
};
