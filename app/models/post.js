import DS from 'ember-data';

var post = DS.Model.extend({
  title: DS.attr('string'),
  body: DS.attr('string')
});

post.reopenClass({
  FIXTURES: [
    { id: 1, title: 'Jimmy', body: 'Is a cool Iron Yard student.' },
    { id: 2, title: 'Jasper', body: 'Is a sort of cool Iron Yard student.' },
    { id: 3, title: 'Eric', body: 'Is a kind of cool Iron Yard student.' }
  ]
});

export default post;
