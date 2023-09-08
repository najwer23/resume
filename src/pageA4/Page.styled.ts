import styled from "styled-components";

export const Page = styled.div`
	margin: 1cm auto;
	/* Define a white paper background that sticks out from the darker overall background */
	background: #fff;
	/* Show a drop shadow beneath each page */
	box-shadow: 0 4px 5px rgba(75, 75, 75, 0.2);
	/* Override outline from user agent stylesheets */
	outline: 0;

	h1 {
		/* Force page breaks after */
		page-break-before: always;
	}

	/* For all headings */
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		/* Avoid page breaks immediately */
		page-break-after: avoid;
	}

	/* For all paragraph tags */
	p {
		/* Reset the margin so that the text starts and ends at the expected marks */
		margin: 0;
	}

	/* For adjacent paragraph tags */
	p + p {
		/* Restore the spacing between the paragraphs */
		margin-top: 0.5cm;
	}

	/* For links in the document */
	a {
		/* Prevent colorization or decoration */
		text-decoration: none;
		color: black;
	}

	/* For tables in the document */
	table {
		/* Avoid page breaks inside */
		page-break-inside: avoid;
	}

	@media print {
		/* Reset all page styles that have been for better screen appearance only */
		/* Break cascading by using the !important rule */
		/* These resets are absolute must-haves for the print styles and the specificity may be higher elsewhere */
		width: initial !important;
		min-height: initial !important;
		margin: 0 !important;
		padding: 0 !important;
		border: initial !important;
		border-radius: initial !important;
		background: initial !important;
		box-shadow: initial !important;

		/* Force page breaks after each .page element of the document */
		page-break-after: always;
	}






	/* A4 */
	/* Reflect the paper width in the screen rendering (must match size from @page rule) */
	width: 21cm;
	/* Reflect the paper height in the screen rendering (must match size from @page rule) */
	min-height: 29.7cm;

	/* Reflect the actual page margin/padding on paper in the screen rendering (must match margin from @page rule) */
	padding-left: 2cm;
	padding-top: 2cm;
	padding-right: 2cm;
	padding-bottom: 2cm;

	/* Use CSS Paged Media to switch from continuous documents to sheet-like documents with separate pages */
	@page {
		/* You can only change the size, margins, orphans, widows and page breaks here */

		/* Require that at least this many lines of a paragraph must be left at the bottom of a page */
		orphans: 4;
		/* Require that at least this many lines of a paragraph must be left at the top of a new page */
		widows: 2;

		size: A4 portrait;

		/* Margin per single side of the page */
		margin-left: 2cm;
		margin-top: 2cm;
		margin-right: 2cm;
		margin-bottom: 2cm;
	}
`;

