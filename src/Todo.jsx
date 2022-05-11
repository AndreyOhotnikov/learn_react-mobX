import React from "react";
import { observer } from "mobx-react-lite";
import todo from "./store/todo";

const Todo = observer(() => {
  console.log('+++++++++++++++++')
  return (
    <div>
      <button onClick={() => todo.fetchTodo()}>fetch todo</button>
      {todo.todos.map(t => 
        <div className="todo" key={t.id}>
          <input type="checkbox" checked={t.complited} onChange={e => todo.complitedTodo(t.id, e.target.checked)}/>
          {t.title}
          <button onClick={() => todo.removeTodo(t.id)}>X</button>
        </div>
        )}
    </div>
  )
})

export default Todo;
