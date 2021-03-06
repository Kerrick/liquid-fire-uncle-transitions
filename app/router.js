import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('uncle');

  this.route('parent', function() {
    this.route('child');
  });
});

export default Router;
