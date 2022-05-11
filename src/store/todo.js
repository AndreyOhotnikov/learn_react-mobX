import { action, makeAutoObservable, observable } from "mobx"

class Todo {
  todos = [
    {id: 1, title: 'kgjfgsggfhfhfhfghfhfgfhfhf', complited: false},
    {id: 2, title: 'hjgjxxfhfhfhfghfhfgfhfhf', complited: false},
    {id: 3, title: 'wffjfjjfhfgjjfhfjfjfh', complited: false}
  ]

  constructor() {
    makeAutoObservable(
      this, 
      // {todos: observable, addTodo: action, complited}, 
      // {deep: true}
    );
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

  fetchTodo () {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => this.todos.push(...json))
  }
}

export default new Todo()
