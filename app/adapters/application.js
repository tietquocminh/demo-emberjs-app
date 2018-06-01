import DS from 'ember-data';
import { set } from '@ember/object';

export default DS.JSONAPIAdapter.extend({
  host: 'https://express-nodejs.firebaseapp.com',
});
