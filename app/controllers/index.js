import Ember from 'ember';
import fetch from 'ember-network/fetch';
import ENV from 'destiny-fastboot/config/environment';

const {
  Controller,
  get,
  set,
} = Ember;

const IndexController = Controller.extend({
  queryParams: ['page'],

  page: 0,
  items: null,

  _update_items(page = 0) {
    const baseURL = 'https://www.bungie.net/Platform/Destiny';
    const API_KEY = window.location ? ENV.API_KEY : ENV.FASTBOOT_API_KEY;
    const request_data = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-API-Key': API_KEY,
      },
    };

    const params = [
      { key: 'definitions', value: true },
      { key: 'page',        value: page },
    ].map((_param) => `${_param.key}=${_param.value}`).join('&');

    return fetch(`${baseURL}/Explorer/Items/?${params}`, request_data)
      .then((response) => response.json())
      .then((response) => {
        const _items = response.Response.definitions.items;
        const _keys = Object.keys(_items);
        const items = [];

        _keys.forEach((_key) => items.push(_items[_key]));

        set(this, 'items', items);
      });
  },

  actions: {
    load_data() {
      const page = get(this, 'page');

      this._update_items(page);
    }
  }
});

export default IndexController;
