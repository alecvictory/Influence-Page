export default class Weather {
    constructor({ id, main, name }) {
        this.id = id
        this.temp = main.temp
        this.name = name
    }

    get weatherTemplate() {
        return `<div class="card">
        <div class="card-body">
            <h5 class="card-title">Weather</h5>
            <h6 class="card-subtitle mb-2 text-muted">${this.temp}</h6>
            <p class="card-text">${this.name}</p>
        </div>`
    }
}