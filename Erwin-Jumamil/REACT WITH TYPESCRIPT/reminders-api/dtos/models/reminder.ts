export default class Reminder {
  id?: number;
  isComplte: boolean;
  constructor(public title: string) {
    this.id = Date.now();
    this.isComplte = false;
  }
}
