import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    delete: function() {
      var id = this.get('model.objectId');
      Ember.$.ajax("https://api.parse.com/1/classes/Post/" + id, {
        type: 'DELETE'
      });
    }
  }
});
