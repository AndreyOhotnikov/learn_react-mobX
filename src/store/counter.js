import { makeAutoObservable } from "mobx"

class Counter {
  count = 0;
  constructor () {
    makeAutoObservable(this)
  }

  increments () {
    this.count = this.count + 1
  }

  dicrements () {
    this.count = this.count - 1
  }
}

export default new Counter()
