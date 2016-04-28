import {Command} from './command';
export class Relution extends Command {

  constructor(staticCommands) {
    super('relution');
    this.staticCommands = staticCommands;
    this.commandDispatcher.subscribe(this.init.bind(this));
    this.args = [];
    this.reserved = ['help', 'quit'];
  }

  init(args) {
    super.init(args);
    Object.keys(this.staticCommands).forEach((command) => {
      if (this.staticCommands[command].name === args[1]) {
        if (!this.staticCommands[command].init) {
          throw new Error('a commmand need a init Method');
        }
        let subargs = this._copy(args);
        subargs.splice(0, 1);
        this.staticCommands[command].init(subargs);
      }
    });
  }
}
