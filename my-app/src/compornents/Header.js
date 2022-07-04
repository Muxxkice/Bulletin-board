import { Link } from "react-router-dom"

export const Header = () => {
	return (
		<header>
			<Link to="/">Home</Link>
			<br />
			<Link to="/thread">Thread</Link>
		</header>
	)
}
