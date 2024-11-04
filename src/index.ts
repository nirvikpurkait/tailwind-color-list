import colors from "./data/colors.json";

type ColorShade = {
  [key: string]: string;
};

type Color = {
  [key: string]: ColorShade;
};

const colorDetails: Color = colors;

// warn:
/**
 * This function uses O(n^2) complexity. Try to reduce
 * the complexity
 */
export function findColorName(hexColor: string): string | null {
  hexColor = hexColor.toLowerCase();

  if (hexColor === "#000000") {
    return "black";
  }

  if (hexColor === "#ffffff") {
    return "white";
  }

  const colorNames = Object.keys(colorDetails);
  for (let colorName of colorNames) {
    const shades = Object.keys(colorDetails[colorName]);

    for (let shade of shades) {
      if (hexColor === colorDetails[colorName][shade]) {
        return `${colorName}-${shade}`;
      }
    }
  }

  return null;
}
