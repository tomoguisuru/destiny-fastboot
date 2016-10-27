import Ember from 'ember';
//import fetch from 'ember-network/fetch';
//import ENV from 'destiny-fastboot/config/environment';

const {
  Route,
} = Ember;

const IndexRoute = Route.extend({

  // afterModel() {
  //   // /Manifest/
  //   // /Explorer/Items/
  //   // /Stats/Definition/
  //   // 4200: 6975606c4aa54f33b9ed883aa1be59a7
  //   // 3000: a7ff0fadde404a40949af9fbac0bcb9e
  //
  //   const baseURL = 'https://www.bungie.net/Platform/Destiny';
  //   const request_data = {
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json',
  //       'X-API-Key': ENV.API_KEY,
  //     }
  //   };
  //
  //   return fetch(`${baseURL}/Explorer/Items/?definitions=true`, request_data)
  //     .then((response) => response.json())
  //     .then((response) => {
  //       const _items = response.Response.definitions.items;
  //       const _keys = Object.keys(_items);
  //       const items = [];
  //       const controller = this.controllerFor('index');
  //
  //       _keys.forEach((_key) => items.push(_items[_key]));
  //
  //       set(controller, 'items', items);
  //     });
  // }

  setupController(controller, model) {
    this._super(controller, model);

    controller.send('load_data');
  }

});

export default IndexRoute;
