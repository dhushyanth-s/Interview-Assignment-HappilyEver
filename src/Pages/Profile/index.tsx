import { useAtom } from "jotai"
import React from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "../../Components/Button"
import Card from "../../Components/Card"
import Container from "../../Components/Container"
import Input from "../../Components/Input"
import { authAtom } from "../../State/auth"
import { styled } from "../../Style/theme"
import { ProfileImage } from "./Components/ProfileImage"

export default function Profile() {
	const [, setAuthState] = useAtom(authAtom)
	const navigate = useNavigate()

	const handleLogout = () => {
		setAuthState({
			isLoggedIn: false,
		})
		navigate("/login")
	}

	return (
		<Container>
			<Card>
				<h1>Profile</h1>
				<ProfileImage />
				<Label>Name</Label>
				<Input placeholder="Name"></Input>
				<Label>Date of Birth</Label>
				<Input placeholder="Date of Birth" type={"date"} />
				<Label>Religion</Label>
				<Input placeholder="Religion"></Input>
				<Label>Height</Label>
				<Input placeholder="height" type={"number"}></Input>
				<Button onClick={handleLogout}>LOGOUT</Button>
			</Card>
		</Container>
	)
}

const Label = styled("label", {
	marginRight: "auto",
	marginLeft: 10,
	marginTop: 20,
	marginBottom: 5,
})
