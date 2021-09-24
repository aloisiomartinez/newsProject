import { createConnections } from "typeorm";

createConnections().then(async (connection) => {
	console.log("Conectado ao DB com sucesso!");
})
.catch((error) => console.log(error));

