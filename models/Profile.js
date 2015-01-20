var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * User Model
 * ==========
 */
var Profile = new keystone.List('Profile', {
	map: { name: 'nickname' },
	autokey: { path: 'slug', from: 'nickname', unique: true }
});

Profile.add({
	nickname: { type: String, required: true, initial: true},
	age: { type: Types.Number, initial: false, required: false, index: true },
	location: { type: Types.Text, initial: false, required: false, index: true }
});



/**
 * Relationships
 */



Profile.defaultColumns = 'nickname, age, location';
Profile.register();
