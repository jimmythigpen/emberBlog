import Ember from 'ember';

var PostsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('post');
  }
});

export default PostsRoute;
