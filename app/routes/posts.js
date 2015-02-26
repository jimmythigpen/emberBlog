import Ember from 'ember';

var PostsRoute = Ember.Route.extend({
  model: function() {
    return Ember.$.ajax('https://api.parse.com/1/classes/Post').then(function(response){
      return response.results;

    });
  }
});

export default PostsRoute;
