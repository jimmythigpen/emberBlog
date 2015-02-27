import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    createPost: function(newTitle, newBody) {
      var self = this;
      var data = {title: newTitle, body: newBody};
      Ember.$.ajax("https://api.parse.com/1/classes/Post/", {
        type: 'POST',
        data: JSON.stringify(data)
      }).done(function(){
        self.transitionTo('posts');
        self.modelFor('posts').addObject(data);
      });
    }
  },

});
