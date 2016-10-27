import Ember from 'ember';
import ENV from 'destiny-fastboot/config/environment';

const {
  Route,
  set,
} = Ember;

const IndexRoute = Route.extend({

  setupController(controller, model) {
    this._super(controller, model);

    const API_KEY = window.location && window.location.port === '3000' ? ENV.FASTBOOT_API_KEY : ENV.API_KEY;

    set(controller, 'API_KEY', API_KEY);

    controller.send('load_data');
  }

});

export default IndexRoute;
