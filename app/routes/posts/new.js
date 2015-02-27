import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    createPost: function(newTitle, newBody) {
      var self = this;
      var data = {title: newTitle, body: newBody};
      Ember.$.ajax("https://api.parse.com/1/classes/Post/", {
        type: 'POST',
        data: JSON.stringify(data),
        success: function (response) {
        data = Ember.$.extend({}, data, response);
        }
      }).done(function(){
        self.modelFor('posts').addObject(data);
        self.transitionTo('posts');
      });
    }
  },

});
