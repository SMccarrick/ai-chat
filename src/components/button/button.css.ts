import { vars } from "$lib/styles.css";
import { style } from "@vanilla-extract/css";

// Define your styles using Vanilla Extract
export const button = style({
  backgroundColor: vars.colors.uiElement.background,
  color: vars.colors.text,
  padding: '8px 16px',
  borderRadius: '4px',
  border: "solid 1px",
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