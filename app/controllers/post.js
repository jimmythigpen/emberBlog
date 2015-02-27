import Ember from 'ember';

var PostController = Ember.ObjectController.extend({
  contenteditable: false,
  actions: {

  editPost: function() {
   this.set('contenteditable', true);



    }
  },

});

export default PostController;
