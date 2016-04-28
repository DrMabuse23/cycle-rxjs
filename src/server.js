import {Command} from './command';

export class Server extends Command {
  constructor(dispatcher) {
    super('server');
    this.commandDispatcher.subscribe((data) => {
      console.log(this.name, data);
    });
  }
}
