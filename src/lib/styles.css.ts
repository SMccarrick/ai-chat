import { createGlobalTheme, globalStyle } from '@vanilla-extract/css';
import { slateDark } from '@radix-ui/colors';
import { tokens } from './tokens';

// Define your theme colors
// https://www.radix-ui.com/docs/colors/palette-composition/the-scales
// Keep grayscale theme for now to stop distractions
export const vars = createGlobalTheme(':root', {
	colors: {
		background: slateDark.slate1, // 1 App background
		subtleBackground: slateDark.slate2, // 2 Subtle background
		text: slateDark.slate11, // 11 Low-contrast text
		alternateText: slateDark.slate12, // 12 High-contrast text
		uiElement: {
			background: slateDark.slate3, // 3 UI element background
			backgroundHover: slateDark.slate4, // 4 Hovered UI element background
			active: slateDark.slate5, // 5 Active / Selected UI element background
			selected: slateDark.slate5, // 5 Active / Selected UI element background
			borderSubtle: slateDark.slate6, // 6 Subtle borders and separators
			border: slateDark.slate7, // 7 UI element border and focus rings
			borderHover: slateDark.slate8, // 8 Hovered UI element border
			solidBackgrounds: slateDark.slate9, // 9 Solid backgrounds
			solidBackgroundsHover: slateDark.slate10 // 10 Hovered solid backgrounds
		}
	},
	tokens
});

// CSS reset
globalStyle('*, *::before, *::after', {
	boxSizing: 'border-box' // 1. Use a more-intuitive box-sizing model
});

globalStyle('*', {
	margin: 0 // 2. Remove default margin
});

globalStyle('html, body', {
	height: '100%', // 3. Allow percentage-based heights in the application
	fontSize: '10px',
	fontFamily:
		'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
	backgroundColor: vars.colors.background
});

globalStyle('body', {
	backgroundColor: vars.colors.background,
	color: vars.colors.text,
	lineHeight: 1.5, // 4. Add accessible line-height
	WebkitFontSmoothing: 'antialiased' // 5. Improve text rendering
});

globalStyle('#root, #__next', {
	isolation: 'isolate' //   9. Create a root stacking context
});

globalStyle('img, picture, video, canvas, svg', {
	// 6. Improve media defaults
	display: 'block',
	maxWidth: '100%'
});

globalStyle('input, button, textarea, select', {
	font: 'inherit' //   7. Remove built-in form typography styles
});

globalStyle('p, h1, h2, h3, h4, h5, h6', {
	overflowWrap: 'break-word' //   8. Avoid text overflows
});
