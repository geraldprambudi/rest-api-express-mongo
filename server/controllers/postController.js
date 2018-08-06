import db from './../models';

const postController = {};

postController.post = (req,res) => {
	const { title, link, text, userId, } = req.body;
// userId = di table User namanya ObjectId, terus
// _creator == userId == ObjectId (diambil dari table user)


	// Validation
	const post = new db.Post({
		title,
		link,
		text,
		_creator: userId,
	});

	post.save().then((newPost) => {
		res.status(200).json({
			success:true,
			data: newPost,
		});
	}).catch((err) => {
		res.status(500).json({
			message:err,
		});
	});
};

	// Mengambil semua data 
	postController.getAll = (req, res) => {
		db.Post.find({}).populate({
			path: '_creator',
			select: 'username createAt -_id'
		}).populate({
			path: '_comments',
			select: 'text createdAt _creator',
			match: { 'isDeleted': false }
		})
		.then((posts) => {
			return res.status(200).json({
				success: true,
				data: posts
			});
		}).catch((err) => {
			return res.status(500).json({
				message: err
			});
		});
	};


export default postController;
