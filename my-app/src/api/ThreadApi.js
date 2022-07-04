import axios from "axios";

export const getThreads = () => {
	const instance = axios.create({
		baseURL: "https://virtserver.swaggerhub.com/INFO_3/BulletinBoardApplication/1.0.0",
		// timeout: 5000
	})
	return instance
		.get("/threads?offset=10")
		.then((res) => {
			console.log(res.data)
			return res.data;
		})
}

