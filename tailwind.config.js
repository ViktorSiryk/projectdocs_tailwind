module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        orbitron: ["Orbitron", "sans-serif"],
      },
      colors: {
        accent: "#00e0ff",
      },
      backgroundImage: {
        "main-gradient": "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        "week-gradient": "linear-gradient(135deg, #1b2735, #090a0f)",
        "text-gradient": "linear-gradient(90deg, #a445b2, #00e0ff)",
      },
      boxShadow: {
        glass: "0 4px 30px rgba(0,0,0,0.5)",
      },
      animation: {
        fade: "fadeIn 1s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
};
