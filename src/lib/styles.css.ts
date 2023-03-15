import {
  slateDarkA
} from '@radix-ui/colors';


// Define your theme colors
// https://www.radix-ui.com/docs/colors/palette-composition/the-scales
// Keep grayscale theme for now to stop distractions
export const vars = createGlobalTheme(':root', {
  colors: {
    background: slateDarkA.slateA1, // 1 App background
    subtleBackground: slateDarkA.slateA2, // 2 Subtle background
    text: slateDarkA.slateA11, // 11 Low-contrast text
    alternateText: slateDarkA.slateA12, // 12 High-contrast text
    uiElement: {
      background: slateDarkA.slateA3, // 3 UI element background
      backgroundHover: slateDarkA.slateA4, // 4 Hovered UI element background
      active: slateDarkA.slateA5, // 5 Active / Selected UI element background
      selected: slateDarkA.slateA5, // 5 Active / Selected UI element background
      borderSubtle: slateDarkA.slateA6, // 6 Subtle borders and separators
      border: slateDarkA.slateA7, // 7 UI element border and focus rings
      borderHover: slateDarkA.slateA8, // 8 Hovered UI element border
      solidBackgrounds: slateDarkA.slateA9, // 9 Solid backgrounds
      solidBackgroundsHover: slateDarkA.slateA10, // 10 Hovered solid backgrounds
    }
  },
  // Add spacing values
  // typography
});

