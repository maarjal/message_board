import Ember from 'ember';

export default Ember.Component.extend({
  favorites: Ember.inject.service(),
  questionFavorited: false,
  actions: {
    addToFavorites(question) {
      this.get('favorites').add(question);
      this.set('questionFavorited', true);
    }
  }
});
