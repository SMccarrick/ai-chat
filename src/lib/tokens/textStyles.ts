import { FONT_SIZES } from "./fontSizes";

// Fluid css to make font styles responsive
export const TEXT_STYLES = {
  p: {
    fontSize: FONT_SIZES.p,
    lineHeight: "normal",
  },
  h1: {
    fontSize: `clamp(
      1.8rem,
      2.7vw + 1rem,
      2.6rem
    );`,
    minHeight: "0vh",
  },
  h2: {
    fontSize: `clamp(${FONT_SIZES.mobileH1}, 6vw, ${FONT_SIZES.desktopH1})`,
    minHeight: "0vh",
  },
  h3: {
    fontSize: `clamp(${FONT_SIZES.mobileH1}, 6vw, ${FONT_SIZES.desktopH1})`,
    minHeight: "0vh",
  },
  h4: {
    fontSize: `clamp(${FONT_SIZES.mobileH1}, 6vw, ${FONT_SIZES.desktopH1})`,
    minHeight: "0vh",
  }
}