import Engine from "./Engine";

export default class Car {
  constructor() {
    this.speed = 1;
    this.engine = new Engine();
  }
  increaseSpeed() {
    this.speed++;
  }
  getEngine() {
    return this.engine;
  }
}
