import { makeAutoObservable } from "mobx"

class Counter {
  count = 0;
  timer = 60;
  constructor () {
    makeAutoObservable(this)
  }

  increments () {
    this.count = this.count + 1
  }

  dicrements () {
    this.count = this.count - 1
  }

  get total() {
    return `count + timer = ${this.count + this.timer}`
  }
}

export default new Counter()
