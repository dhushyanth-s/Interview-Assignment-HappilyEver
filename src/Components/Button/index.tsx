import { styled } from "../../Style/theme"

export const Button = styled("button", {
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	
	transition: "all 0.2s ease-in-out",

	width: "min(330px, 90vw)",
	padding: "15px 10px",
	outline: "none",
	border: "none",
	borderRadius: "0.5rem",

	backgroundColor: "$primary",
	color: "white",

	cursor: "pointer",

	"&:focus, &:hover": {
		boxShadow: "0 0 0 2px $colors$primary,inset 0 0 0 1px white",
	}
})
