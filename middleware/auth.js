var jwt = require("jsonwebtoken");

module.exports = function(req, res, next) {
	//Get token from header
	// const token = req.header("x-auth-token");
	const token = req.cookies.token;

	//Check if no token
	if (!token) {
		return res.status(401).json({ msg: "No token. Authorization denied" });
	}

	//Verify token
	jwt.verify(token, "secret", function(err, decoded) {
		if (err) throw err;
		req.user = decoded.user;
		next();
	});
};
