import Ember from 'ember';

export default Ember.Controller.extend({
  sortBy: ['updatedAt:desc'],
  sortedPosts: Ember.computed.sort('model', 'sortBy')
});
