var Post = require('./post');

module.exports = Backbone.Collection.extend({

  model: Post,

  url: '/api/get'

});
