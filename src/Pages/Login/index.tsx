import React from "react"
import Container from "../../Components/Container"
import Input from "../../Components/Input"
import { Button } from "../../Components/Button"
import Card from "../../Components/Card"
import { useLogin } from "./login.hook"

export default function Login() {
	const { email, setEmail, password, setPassword, handleSubmit } = useLogin()
	return (
		<Container
			css={{
				height: "100vh",
			}}
		>
			<Card>
				<h1>Login to continue</h1>
				<Input
					placeholder="Username"
					type="name"
					required
					value={email}
					onChange={(e) => setEmail(e.currentTarget.value)}
				/>
				<Input
					placeholder="Password"
					type="password"
					required
					value={password}
					onChange={(e) => setPassword(e.currentTarget.value)}
				/>
				<Button onClick={handleSubmit}>LOG IN</Button>
			</Card>
		</Container>
	)
}
