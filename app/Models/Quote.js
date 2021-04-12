export default class Quote {
    constructor({ _id, content, author }) {
        this.id = _id
        this.quote = content
        this.author = author
    }

    get quoteTemplate() {
        return `
        <div class="card quote">
            <h5 class="card-title">Quote Of the Day</h5>
            <h6 class="mb-2 mouse-over">${this.author}</h6>
            <p class="">${this.quote}</p>
        </div>`
    }
}