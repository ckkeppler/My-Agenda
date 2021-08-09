import { v4 as uuidv4 } from 'uuid';

export class Task {
  id: string;
  completed?: boolean;

  constructor(public task: string) {
    this.id = uuidv4();
  }
}
