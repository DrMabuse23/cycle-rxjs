import {Server} from './server';
import {Relution} from './relution';

let staticCommands = {
  server: new Server()
};

let relution = new Relution(staticCommands);
