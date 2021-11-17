import { styled } from "../../Style/theme"

const Card = styled("div", {
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",

	padding: 50,
	borderRadius: 20,
	
	boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
})

export default Card
