import { observer } from "mobx-react-lite";
import React from "react";
import './App.css'
import counter from "./store/counter";

const Counter = observer(() => {
  return (
    <div className="counter">
      {'count = ' + counter.count }
      <div className="btns">
        <button className="btn" onClick={() => counter.increments()}>+</button>
        <button className="btn" onClick={() => counter.dicrements()}>-</button>
      </div>
    </div>
  )
})

export default Counter;
