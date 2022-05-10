import { makeAutoObservable } from "mobx"

class Todo {
  todos = [
    {id: 1, title: 'аараоаоатаьоачееаодрлмоыилмы', complited: false},
    {id: 2, title: 'hjgjxxfhfhfhfghfhfgfhfhf', complited: false},
    {id: 3, title: 'wffjfjjfhfgjjfhfjfjfh', complited: false}
  ]

  constructor() {
    makeAutoObservable(this);
  }

  addTodo(todo) {
    this.todos.push(todo)
  }

  removeTodo(id) {
    this.todos = this.todos.filter(todo => todo.id !== id)
  }

  complitedTodo(id, isChecked) {
    this.todos = this.todos.map(todo => {
      if (todo.id === id) todo.complited = isChecked;
      return todo
    })
  }
}

export default new Todo()
