import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
/**
 * @class Dispatcher
 */
export class Dispatcher {
  constructor() {
    this.observer = Observable.create((observer) => {
      process.argv.splice(0, 2);
      observer.next(process.argv);
    });
  }
}
