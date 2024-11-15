import { colorsWithShade } from "./data/colors";

// warn:
/**
 * This function uses O(1) complexity.
 */
export function findColorName(hexColor: string): string | null {
  hexColor = hexColor.toLowerCase();

  if (hexColor === "#000000") {
    return "black";
  }

  if (hexColor === "#ffffff") {
    return "white";
  }

  const colorName = colorsWithShade.get(hexColor);
  if (colorName) {
    return colorName;
  }

  return null;
}
