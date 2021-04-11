export default class Quote {
    constructor({ _id, content, author }) {
        this.id = _id
        this.quote = content
        this.author = author
    }

    get quoteTemplate() {
        return `<div class="card">
        <div class="card-body">
            <h5 class="card-title">Quote Of the Day</h5>
            <h6 class="card-subtitle mb-2 text-muted">${this.author}</h6>
            <p class="card-text">${this.quote}</p>
        </div>`
    }
}