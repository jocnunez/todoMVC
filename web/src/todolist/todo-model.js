class Todo {
    constructor(text) {
        this.text = text
        this.check = false
        this.createDate = Date.now()
    }
}

class TodoList {
    constructor() {
        this.list = []
    }

    addTodo(todo) {
        this.list.push(todo)
    }
}

