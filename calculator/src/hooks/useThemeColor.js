// import { useState } from "react";

// export default function useThemeColor() {
//   const [currentTheme, updateTheme] = useState(
//     localStorage.getItem("theme") || "dark"
//   );

//   const theme = currentTheme;

//   return {
//     theme,
//     changeTheme: () => {
//       const oldTheme = localStorage.getItem("theme");

//       let newTheme;
//       if (oldTheme === "dark") {
//         newTheme = "bright";
//       } else if (oldTheme === "bright") {
//         newTheme = "alternative";
//       } else {
//         newTheme = "dark";
//       }

//       // Update local storage
//       localStorage.setItem("theme", newTheme);

//       updateTheme(newTheme);
//     },
//   };
// }

import { useState } from "react";

export default function useThemeColor() {
  const [currentTheme, setCurrentTheme] = useState(
    localStorage.getItem("theme")
  );

  const [borderColor, setBorderColor] = useState("#ccc");

  const theme =
    currentTheme === "dark"
      ? "dark"
      : currentTheme === "bright"
      ? "bright"
      : "alternative";

  const changeTheme = (newTheme, newBorderColor) => {
    setCurrentTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    setBorderColor(newBorderColor);
  };

  return {
    theme,
    changeTheme,
    borderColor,
  };
}
