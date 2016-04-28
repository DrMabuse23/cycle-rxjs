import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/catch';
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
      if (process.argv.lenght <= 2) {
        observer.complete();
      }
      let args = this._copy(process.argv);
      args.splice(0, 2);
      observer.next(args);
      observer.complete();
    })
      .catch((e) => {
        throw new Error(e);
      })
      .filter((data) => {
        //console.log(data[2] === this.name, data[2], this.name);
        return data[0] === this.name;
      });
  }

  init(args) {
    console.log(this.name, args);
  }

  _copy(org) {
    return JSON.parse(JSON.stringify(org));
  }
}
