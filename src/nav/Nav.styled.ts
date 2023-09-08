import styled from "styled-components";

export const NavContainer = styled.div`
	padding: 20px;
	display: flex;
	justify-content: space-between;

	@media print {
		display: none !important;
	}

	/* @media ${({ theme }) => theme.device.mobile} {
		flex-wrap: wrap;
		justify-content: center;
		flex-direction: column-reverse;
		align-items: center;
		gap: 20px;
	} */
`;

export const BoxMody = styled.div`
	color: ${({ theme }) => theme.colors.color1};
	font-weight: bold;
`;

export const NavUtils = styled.div`
	color: ${({ theme }) => theme.colors.color1};
	display: flex;
	gap: 20px;
	position: fixed;
	right: 30px;
`;

export const NavUtil = styled.button<{ $bgColor?: string; $active?: boolean }>`
	background-color: ${props => props.$active ? "#23E200" : props.$bgColor || "initial"};
	border: 0 solid #e5e7eb;
	box-sizing: border-box;
	color: #000000;
	display: flex;
	font-size: 1rem;
	font-weight: 700;
	justify-content: center;
	line-height: 1.75rem;
	padding: 0.3rem 1.3rem;
	position: relative;
	text-align: center;
	text-decoration: none #000000 solid;
	text-decoration-thickness: auto;
	width: 100%;
	max-width: 460px;
	position: relative;
	cursor: pointer;
	transform: rotate(-2deg);
	user-select: none;
	-webkit-user-select: none;
	touch-action: manipulation;

	&:focus {
		outline: 0;
	}

	&:after {
		content: "";
		position: absolute;
		border: 1px solid #000000;
		bottom: 4px;
		left: 4px;
		width: calc(100% - 1px);
		height: calc(100% - 1px);
	}

	&:hover:after {
		bottom: 2px;
		left: 2px;
	}
`;