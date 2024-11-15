import { describe, test, expect } from "vitest";
import { findColorName } from "../src/index";
import jsonData from "../src/data/colors.json";

const colorDetails = Object.entries(jsonData);

describe("test for uppercase/lowercase/and mixed color type", () => {
  test("return white for uppercase color hex: #FFFFFF", () => {
    expect(findColorName("#FFFFFF")).toBe("white");
  });

  test("return white for lowercase color hex: #ffffff", () => {
    expect(findColorName("#ffffff")).toBe("white");
  });

  test("return white for mixed color hex: #fFfFff", () => {
    expect(findColorName("#fFfFff")).toBe("white");
  });
});

describe("test non-shading color", () => {
  test("return black for #000000", () => {
    expect(findColorName("#000000")).toBe("black");
  });

  test("return white for #ffffff", () => {
    expect(findColorName("#ffffff")).toBe("white");
  });
});

describe("return null if no matching color", () => {
  test("for #94a3b9 returns null", () => {
    expect(findColorName("#94a3b9")).toBe(null);
  });
});

describe(`return color name for valid color`, () => {
  colorDetails.forEach((eachColorDetail, colorDetailsIdx) => {
    const [colorName, allShades] = eachColorDetail;

    Object.entries(allShades).forEach((eachShadeDetail, eachShadeDetailIdx) => {
      const [shadeNumber, shadeColor] = eachShadeDetail;

      const shouldSkipTest: boolean =
        colorDetailsIdx === 2 && eachShadeDetailIdx === 0;

      test(
        `return ${colorName}-${shadeNumber} for ${shadeColor}`,
        { skip: shouldSkipTest },
        () => {
          expect(findColorName(shadeColor)).toBe(`${colorName}-${shadeNumber}`);
        }
      );
    });
  });
});
