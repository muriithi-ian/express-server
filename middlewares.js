module.exports.logMiddleware = (req, res, next) => {
	console.log(`${req.method} ${req.path}`);
	next();
};

module.exports.homeMiddleware = (req, res) => {
	res.send("Hello World!");
};

module.exports.usersMiddleware = (req, res) => {
	res.send("Users");
};
