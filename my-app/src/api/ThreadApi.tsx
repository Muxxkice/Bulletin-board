import axios from "axios";

const instance = axios.create({
	baseURL: "https://virtserver.swaggerhub.com/INFO_3/BulletinBoardApplication/1.0.0",
	headers: { 'Access-Control-Allow-Origin': '*' }
})



export const getThreads = () => {

	return instance
		.get("/threads?offset=20")
		.then((res) => {
			console.log(res.data)
			return res.data;
		})
}

export const newThread = (data) => {
	console.log(data)
	return instance
		.post("/threads", data)
		.then((res) => {
			console.log(res)
			return res.data;
		})
}

