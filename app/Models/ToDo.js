export default class ToDo {
    constructor({ _id, completed, user, description }) {
        this.id = _id
        this.completed = completed
        this.user = user
        this.description = description
    }

    get toDoTemplate() {
        return `<div class="card">
        <div class="card-body">
            <h5 class="card-title">To-Dos</h5>
            <h6 class="card-subtitle mb-2 text-muted">${this.id}</h6>
            <p class="card-text">${this.id}</p>
        </div>`
    }
}