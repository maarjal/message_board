import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestion: false,
  actions: {
    updateFormShow() {
      this.set('updateQuestion', true);
    },
    saveQuestionUpdate(question) {
      var params = {
        content: this.get('content'),
        author: this.get('author'),
        notes: this.get('notes'),
      };
      this.set('updateQuestion', false);
      this.sendAction('saveQuestionUpdate', question, params);
    }
  }
});
