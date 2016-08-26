import Ember from 'ember';

export function noanswers(params/*, hash*/) {
  var question = params[0];

  if(question.get('answers').get('length') === 0) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>' + '<span> Be the first to answer</span>');
  }
}

export default Ember.Helper.helper(noanswers);
