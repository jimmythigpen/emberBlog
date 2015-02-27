import Ember from 'ember';

var PostRoute = Ember.Route.extend({
  actions: {
    save: function(post) {
    console.log(post);

    }
  },

});

export default PostRoute;
