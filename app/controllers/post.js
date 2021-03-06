import Ember from 'ember';

var PostController = Ember.Controller.extend({
  isEditing: true,
  actions: {

  editPost: function() {
   this.set('isEditing', false);
 },

  save: function(post){
    var id = post.objectId;
    Ember.$.ajax("https://api.parse.com/1/classes/Post/" + id, {
      type: 'PUT',
      data: JSON.stringify(post)

    });
    this.set('isEditing', true);
  }
},

});

export default PostController;
