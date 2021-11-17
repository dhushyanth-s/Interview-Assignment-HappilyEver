import React, { ChangeEvent, useState } from "react"
import { Button } from "../../../Components/Button"
import { styled } from "../../../Style/theme"

const RawProfileImage = styled("img", {
	width: "100%",
	height: "100%",
	objectFit: "cover",
	borderRadius: "50%",
	border: "1px solid #ccc",
	margin: "0 auto",
	display: "block",

	maxWidth: 200,
	maxHeight: 200,
})

export function ProfileImage() {
	const [image, setImage] = useState<string | undefined>(undefined)

	const onImageChange = (event: ChangeEvent<HTMLInputElement>) => {
		if (event.target.files && event.target.files[0]) {
			setImage(URL.createObjectURL(event.target.files[0]))
		}
	}

	return (
		<>
			{image && <RawProfileImage src={image} />}
			<Button as="label" css={{
				marginTop: "10px",
				width: "max-content",
				fontSize: "11px",
				fontWeight: 400
			}}>
				{image === undefined ? "CHOOSE A PROFILE PICTURE" : "CHOOSE ANOTHER PROFILE PICTURE"}
				<input
					type="file"
					onChange={onImageChange}
					style={{ display: "none" }}
				/>
			</Button>
		</>
	)
}
