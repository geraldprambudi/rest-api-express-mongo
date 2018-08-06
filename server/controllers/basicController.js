const basicController = {};

basicController.get = (req, res) => {
	res.json({
		message: "Welcome To API"
	});
};

export default basicController;