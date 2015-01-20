var keystone = require('keystone'),
	Types = keystone.Field.Types;

var HomePage = new keystone.List('HomePage', {
});

HomePage.add({
	title: { type: String, required: true, default: 'Keystone JS' },
	publishedDate: { type: Types.Date, index: true, dependsOn: { state: 'published' } },
	content: {
		featuredPost: { type: Types.Relationship, ref: 'Post', index: true },
		featuredGallery: { type: Types.Relationship, ref: 'Gallery', index: true },
		welcomeMessage: { type: Types.Html, wysiwyg: true, height: 150 }
	}
});

HomePage.register();
