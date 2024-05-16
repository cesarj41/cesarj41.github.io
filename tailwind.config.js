/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        theme: {
          background: "var(--background)",
          foreground: "var(--foreground)",
          input: "var(--input)",
          primary: "var(--primary)",
          "primary-foreground": "var(--primary-foreground)",
          "primary-light": "var(--primary-light)",
          secondary: "var(--secondary)",
          "secondary-foreground": "var(--secondary-foreground)",
          muted: "var(--muted)",
          "muted-foreground": "var(--muted-foreground)",
          accent: "var(--accent)",
          "accent-foreground": "var(--accent-foreground)",
          destructive: "var(--destructive)",
          "destructive-foreground": "var(--destructive-foreground)"
        }
      }
    }
  },
  plugins: []
};
