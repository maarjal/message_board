import Ember from 'ember';

export default Ember.Component.extend({
  answerNum: Ember.computed('question.answers', function() {
    return this.get('question.answers').get('length');
  })
});
