import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import readline from 'readline';

export class Command {
  constructor(name) {
    if (!name) {
      throw Error('Command need a name');
    }
    this.rl = readline.createInterface(process.stdin, process.stdout)
    this.name = name;
    let self = this;

    this.commandDispatcher = Observable.create((observer) => {
      observer.next(process.argv);
    }).filter((data) => {
      //console.log(data[2] === this.name, data[2], this.name);
      return data[2] === this.name;
    });
  }
}
