import Ember from 'ember';

const {
  Route,
} = Ember;

const IndexRoute = Route.extend({

  setupController(controller, model) {
    this._super(controller, model);

    controller.send('load_data');
  }

});

export default IndexRoute;
