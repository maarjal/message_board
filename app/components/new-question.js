import Ember from 'ember';

export default Ember.Component.extend({
  addQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addQuestion', true);
    },
    saveQuestion() {
      var params = {
        content: this.get('content') ? this.get('content'):"",
        author: this.get('author') ? this.get('author'):"",
        notes: this.get('notes') ? this.get('notes'):"",
      };
      this.set('addQuestion', false);
      this.sendAction('saveQuestion', params);
    }
  }
});
