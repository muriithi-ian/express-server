const express = require("express");
const {
	logMiddleware,
	homeMiddleware,
	usersMiddleware,
} = require("./middlewares");
const app = express();

app.use(logMiddleware);
app.get("/", homeMiddleware);
app.get("/users", usersMiddleware);

app.listen(3000, () => {
	console.log("Server running on port 3000");
});
