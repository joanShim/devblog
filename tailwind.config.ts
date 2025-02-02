import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: ["./(app|src)/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ["var(--font-pretendard)"],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        border: "hsl(var(--border))",
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      keyframes: {
        flickering: {
          from: {
            opacity: "0",
          },
          to: {
            opacity: "0",
          },
          "45%": {
            opacity: "1",
          },
          "55%": {
            opacity: "1",
          },
        },
      },
      animation: {
        flickering: "flickering 1s infinite",
      },
      typography: {
        DEFAULT: {
          css: {
            color: "rgb(55, 53, 47)",
            "max-width": "none",
            h1: {
              color: "rgb(55, 53, 47)",
              fontWeight: "700",
              fontSize: "2.5em",
              marginTop: "1.4em",
              marginBottom: "0.5em",
            },
            h2: {
              color: "rgb(55, 53, 47)",
              fontWeight: "600",
              fontSize: "1.875em",
              marginTop: "1.4em",
              marginBottom: "0.5em",
            },
            h3: {
              color: "rgb(55, 53, 47)",
              fontWeight: "600",
              fontSize: "1.5em",
              marginTop: "1em",
              marginBottom: "0.5em",
            },
            "code::before": {
              content: '"',
            },
            "code::after": {
              content: '"',
            },
            "code:not(pre code)": {
              color: "#eb5757",
              backgroundColor: "rgba(135, 131, 120, 0.15)",
              padding: "0.2em 0.4em",
              borderRadius: "3px",
              fontSize: "85%",
              fontWeight: "400",
              fontFamily:
                "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
            },
            pre: {
              padding: "0",
              backgroundColor: "transparent",
            },
            "pre code": {
              backgroundColor: "transparent",
              color: "inherit",
              fontSize: "inherit",
              fontFamily: "inherit",
              padding: "0",
            },
            a: {
              color: "inherit",
              textDecoration: "underline",
              textDecorationColor: "rgba(55, 53, 47, 0.4)",
              fontWeight: "400",
              "&:hover": {
                textDecorationColor: "rgba(55, 53, 47, 0.8)",
              },
            },
            blockquote: {
              fontWeight: "400",
              fontStyle: "normal",
              borderLeftColor: "rgba(55, 53, 47, 0.2)",
              borderLeftWidth: "3px",
              quotes: "none",
              color: "rgba(55, 53, 47, 0.7)",
              marginTop: "1em",
              marginBottom: "1em",
              paddingLeft: "1em",
            },
            ul: {
              listStyleType: "disc",
              paddingLeft: "1.5em",
              marginTop: "0.5em",
              marginBottom: "0.5em",
            },
            ol: {
              listStyleType: "decimal",
              paddingLeft: "1.5em",
              marginTop: "0.5em",
              marginBottom: "0.5em",
            },
            "ul li": {
              marginTop: "0.25em",
              marginBottom: "0.25em",
              paddingLeft: "0.375em",
            },
            "ol li": {
              marginTop: "0.25em",
              marginBottom: "0.25em",
              paddingLeft: "0.375em",
            },
            "--tw-prose-body": "rgb(55, 53, 47)",
            "--tw-prose-headings": "rgb(55, 53, 47)",
            "--tw-prose-links": "rgb(55, 53, 47)",
            "--tw-prose-bold": "rgb(55, 53, 47)",
            "--tw-prose-counters": "rgb(55, 53, 47)",
            "--tw-prose-bullets": "rgb(55, 53, 47)",
            "--tw-prose-quotes": "rgba(55, 53, 47, 0.7)",
            "--tw-prose-code": "#eb5757",
          },
        },
        invert: {
          css: {
            color: "rgba(255, 255, 255, 0.9)",
            a: {
              color: "rgba(255, 255, 255, 0.9)",
              textDecorationColor: "rgba(255, 255, 255, 0.4)",
              "&:hover": {
                textDecorationColor: "rgba(255, 255, 255, 0.8)",
              },
            },
            blockquote: {
              borderLeftColor: "rgba(255, 255, 255, 0.2)",
              color: "rgba(255, 255, 255, 0.7)",
            },
            h1: {
              color: "rgba(255, 255, 255, 0.9)",
            },
            h2: {
              color: "rgba(255, 255, 255, 0.9)",
            },
            h3: {
              color: "rgba(255, 255, 255, 0.9)",
            },
            h4: {
              color: "rgba(255, 255, 255, 0.9)",
            },
            code: {
              color: "#ff6b6b",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
            },
            "pre code": {
              backgroundColor: "transparent",
            },
            "code::before": {
              content: '"',
            },
            "code::after": {
              content: '"',
            },
            "--tw-prose-body": "rgba(255, 255, 255, 0.9)",
            "--tw-prose-headings": "rgba(255, 255, 255, 0.9)",
            "--tw-prose-lead": "rgba(255, 255, 255, 0.7)",
            "--tw-prose-links": "rgba(255, 255, 255, 0.9)",
            "--tw-prose-bold": "rgba(255, 255, 255, 0.9)",
            "--tw-prose-counters": "rgba(255, 255, 255, 0.7)",
            "--tw-prose-bullets": "rgba(255, 255, 255, 0.7)",
            "--tw-prose-hr": "rgba(255, 255, 255, 0.2)",
            "--tw-prose-quotes": "rgba(255, 255, 255, 0.7)",
            "--tw-prose-quote-borders": "rgba(255, 255, 255, 0.2)",
            "--tw-prose-captions": "rgba(255, 255, 255, 0.7)",
            "--tw-prose-code": "#ff6b6b",
            "--tw-prose-th-borders": "rgba(255, 255, 255, 0.2)",
            "--tw-prose-td-borders": "rgba(255, 255, 255, 0.2)",
          },
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;

export default config;
