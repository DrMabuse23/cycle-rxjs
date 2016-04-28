import {Command} from './command';
export class Relution extends Command {
  constructor(dispatcher) {
    super('relution');
    this.commandDispatcher.subscribe((data) => {
      console.log(this.name, data);
    });
  }
}
