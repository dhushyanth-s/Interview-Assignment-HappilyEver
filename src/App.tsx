import { useAtom } from "jotai"
import React, { useState } from "react"
import { BrowserRouter, Routes, Navigate, Route } from "react-router-dom"
// import Login from "./Pages/Login"
import Login from "./Pages/Login"
import Profile from "./Pages/Profile"
import { authAtom } from "./State/auth"
import { globalCss } from "./Style/theme"

function App() {
	globalCss({
		body: {
			margin: 0,
			padding: 0,
			fontFamily: "sans-serif",
			boxSizing: "border-box",
		},
	})()
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={
						<ProtectedRoute>
							<Profile />
						</ProtectedRoute>
					}
				/>
				<Route path="/login" element={<Login />} />
				<Route path="*" element={<div>Not Found</div>} />
			</Routes>
		</BrowserRouter>
	)
}

function ProtectedRoute({
	children,
}: {
	children: React.ReactElement
}): React.ReactElement {
	const [authState] = useAtom(authAtom)

	if (authState.isLoggedIn) {
		return children
	} else {
		return <Navigate to="/login" />
	}
}

export default App
