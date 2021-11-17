import { styled } from "../../Style/theme"
import React, { useState } from "react"

const Input = styled("input", {
	display: "block",
	padding: 15,
	margin: "10px",
	borderRadius: 10,
	border: "none",
	outline: "none",
	width: "min(300px, 80vw)",

	boxShadow: "0 0 0 1px grey",
	
	transition: "box-shadow 0.2s",

	"&:focus": {
		boxShadow: "0 0 0 2px $colors$primary",
	},
})

export default Input