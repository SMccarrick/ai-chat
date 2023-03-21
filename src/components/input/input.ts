import { vars } from "$lib/styles.css";
import { style } from "@vanilla-extract/css";

// Define your styles using Vanilla Extract
export const input = style({
  ...vars.tokens.textStyles.p,
  padding: vars.tokens.spacing.sm,
	height: '4.8rem',
  backgroundColor: "white",
  color: vars.colors.text,
  border: "solid 0.1rem",
  borderColor: vars.colors.uiElement.border,
  cursor: 'pointer',
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