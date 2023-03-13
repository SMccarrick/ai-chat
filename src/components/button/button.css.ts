import { vars } from "$lib/styles.css";
import { style } from "@vanilla-extract/css";

// Define your styles using Vanilla Extract
export const button = style({
  backgroundColor: vars.color.primary,
  color: vars.color.text,
  padding: '8px 16px',
  borderRadius: '4px',
  border: 'none',
  cursor: 'pointer',
  ':hover': {
    backgroundColor: vars.color.primary,
    opacity: 0.8,
  },
});