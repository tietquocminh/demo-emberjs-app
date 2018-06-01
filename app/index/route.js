import Route from '@ember/routing/route';
import { A } from '@ember/array';
import { inject } from '@ember/service';
import { get } from '@ember/object';

export default Route.extend({
  store: inject(),
  model() {
    return get(this, 'store').findAll('employee');
  }
});
