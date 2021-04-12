export default class ToDo {
    constructor({ description, _id = null, completed = null, user = null }) {
        this.id = _id
        this.completed = completed
        this.user = user
        this.description = description
    }

    get toDoTemplate() {
        return `
        <p class="card-text">${this.description}</p>
        `
    }
}