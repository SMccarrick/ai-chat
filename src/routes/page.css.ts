import { style, type ComplexStyleRule } from '@vanilla-extract/css';
import { vars } from '../lib/styles.css';
import { QUERIES } from '../lib/tokens/breakpoints';

export const containerStyle = style({
	width: '100%',
	height: '100vh',
	display: 'grid',
	gridTemplateAreas: `
	"sidebar"
	"conversationContainer"
	`,
	gridTemplateColumns: 'auto',
	gridTemplateRows: '6rem auto',
	'@media': {
		[QUERIES.tabletAndUp]: {
			gridTemplateAreas: `"sidebar conversationContainer"`,
			gridTemplateColumns: '28rem auto',
			gridTemplateRows: '100%'
		}
	}
});

// TODO: populate with conversations from one session
export const sidebar = style({
	backgroundColor: vars.colors.background,
	gridArea: 'sidebar',
	padding: vars.tokens.spacing.sm
});

// TODO: add a toggle button that shows a modal
export const conversationContainer = style({
	backgroundColor: vars.colors.subtleBackground,
	gridArea: 'conversationContainer',
	display: 'grid',
	gridTemplateAreas: `
	"conversation"
	"prompt"
	`,
	gridTemplateColumns: 'auto',
	gridTemplateRows: 'auto max-content'
});

export const conversationStyle = style({
	gridArea: 'conversation',
	display: 'flex',
	flexDirection: 'column',
	padding: vars.tokens.spacing.sm,
	gap: vars.tokens.spacing.xs
});

export const formContainerStyle = style({
	backgroundColor: vars.colors.background,
	gridArea: 'prompt',
	width: '100%',
	display: 'flex',
	flexDirection: 'column',
	alignContent: 'space-between',
	gap: vars.tokens.spacing.xs,
	padding: vars.tokens.spacing.xs,
	'@media': {
		[QUERIES.tabletAndUp]: {
			flexDirection: 'row',
		}
	}
});

export const inputStyle = style({
	...vars.tokens.textStyles.p,
	padding: vars.tokens.spacing.xs,
	height: "4.8rem",
	maxWidth: '68rem',
	width: "100%",
});

export const formButtonsStyle = style({
	width: "100%",
	maxWidth: "20rem",
	display: "flex",
	flexDirection: "row-reverse",
	gap: vars.tokens.spacing.xs,
	'@media': {
		[QUERIES.tabletAndUp]: {
			flexDirection: 'row',
		}
	},
});

const chatBubbleBase: ComplexStyleRule = {
	...vars.tokens.textStyles.p,
	whiteSpace: 'pre-line',
	display: 'inline-block',
	padding: `${vars.tokens.spacing.xs} ${vars.tokens.spacing.sm}`,
	borderRadius: '1.8rem',
	width: 'fit-content'
};

export const chatBubbleStyles = style({
	selectors: {
		'&:nth-of-type(2n)': {
			...chatBubbleBase,
			backgroundColor: vars.colors.uiElement.background,
			color: vars.colors.alternateText,
			maxWidth: '75%'
		},
		'&:nth-of-type(2n + 1)': {
			...chatBubbleBase,
			backgroundColor: vars.colors.uiElement.solidBackgrounds,
			color: vars.colors.alternateText,
			alignSelf: 'end'
		}
	}
});
