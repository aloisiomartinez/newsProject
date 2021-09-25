import { createConnections } from "typeorm";

createConnections().then(async (connection) => {
	console.log("DB Connected!");
})
.catch((error) => console.log(error));

