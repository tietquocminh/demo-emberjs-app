import Route from '@ember/routing/route';
import { A } from '@ember/array';

export default Route.extend({
  model() {
    return A([
      {
        label: 'Apple ID',
        userId: 'minhtq.nouvo@gmail.com',
        password: 'Nouvo010884'
      },
      {
        label: 'Facebook',
        userId: 'tietquocminh',
        password: 'Cmscml@2017'
      },
      {
        label: 'Gmail',
        userId: 'minhtq.nouvo@gmail.com',
        password: 'Mapafoi@2017'
      },
      {
        label: 'Gmail',
        userId: 'batamle@gmail.com',
        password: 'tathithule'
      }
    ]);
  }
});
