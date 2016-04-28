import {Server} from './server';
import {Relution} from './relution';

let staticCommands = {
  server: new Server()
};

if (process.argv[2] === 'relution') {
  let relution = new Relution(staticCommands);
}

