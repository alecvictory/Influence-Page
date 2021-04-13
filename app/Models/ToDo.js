export default class ToDo {
    constructor({ description, _id = null, completed = null, user = null }) {
        this.id = _id
        this.completed = completed
        this.user = user
        this.description = description
    }

    get toDoTemplate() {
        return `
        <div>
        <input type='checkbox' id='checkbox' onclick="app.toDosController.toggleToDo('${this.id}')" ${this.completed ? "checked" : ""}>
        <p class="card-text">${this.description}</p>
        </input>
        <button type="button" class="btn btn-danger" onclick="app.toDosController.removeToDo('${this.id}')">Delete</button>
        </div>
        `
    }
}