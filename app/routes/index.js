import Ember from 'ember';
import fetch from 'ember-network/fetch';

const {
  Route,

} = Ember;

const IndexRoute = Route.extend({

  model() {
    return fetch('https://api.github.com/users/tomdale')
      .then((response) => response.json());
  }

});

export default IndexRoute;
