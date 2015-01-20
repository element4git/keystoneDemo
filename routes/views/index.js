var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;
	
	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';
	locals.homePage = {};
	view.on('init', function(next) {
		
		var q = keystone.list('HomePage').model.findOne();

		q.exec(function (err, result) {
			locals.homePage = result;
			next();			
		});
	})

	//Get featured Post
	view.on('init', function(next) {

		if (locals.homePage.content.featuredPost != null)
		{
			var q = keystone.list('Post').model.findById(locals.homePage.content.featuredPost);
			q.exec(function (err, results) {
				locals.post = results;
				next();
			})
		}
		else {
			next();
		}

	})

	//Get featured Gallery Image
	view.on('init', function(next) {

		if (locals.homePage.content.featuredGallery != null)
		{
			var q = keystone.list('Gallery').model.findById(locals.homePage.content.featuredGallery);
			q.exec(function (err, results) {
				locals.gallery = results;
				next();
			})
		}
		else {
			next(err);
		}

	})
	// Render the view
	view.render('index');
	
};
