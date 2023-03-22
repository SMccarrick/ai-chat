import { vars } from "$lib/styles.css";
import { style } from "@vanilla-extract/css";

export const button = style({
  ...vars.tokens.textStyles.p,
  backgroundColor: vars.colors.uiElement.background,
  color: vars.colors.text,
  padding: vars.tokens.spacing.xs,
  width: "100%",
  height: "4.8rem",
  borderRadius: "0.8rem",
  border: "none",
  cursor: 'pointer',
  whiteSpace: "nowrap",
  ':hover': {
    backgroundColor: vars.colors.uiElement.backgroundHover,
    opacity: 0.8,
  },
  ':active': {
    backgroundColor: vars.colors.uiElement.active,
    opacity: 0.8,
  },
  ":disabled": {
    backgroundColor: vars.colors.uiElement.background,
    opacity: 0.3,
  }
});