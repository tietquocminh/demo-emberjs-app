import DS from 'ember-data';
import { set } from '@ember/object';

export default DS.JSONAPIAdapter.extend({
  // host: 'https://express-nodejs.firebaseapp.com', // local
  host: 'http://localhost:5001/myvault-id8/us-central1/app'
});
