import { useAtom } from "jotai"
import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import { authAtom } from "../../State/auth"

export function useLogin() {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [, setAuthState] = useAtom(authAtom)
	const navigate = useNavigate()

	const handleSubmit = async () => {
		setAuthState({
			isLoggedIn: true,
		})
		navigate("/")
	}

	return {
		email,
		password,
		handleSubmit,
		setEmail,
		setPassword,
	}
}
