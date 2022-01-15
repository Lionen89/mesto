export default class Section {
    constructor({
        items,
        renderer
    }, containerSelector) {
        this._items = items;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    };

    addItem(item) {
        const card = this._renderer(item);
        this._container.prepend(card);
    };

    renderItem() {
        this.clear();
        this._items.forEach((item) => {
            this.addItem(item);
        });
    };

    clear() {
        this._container.innerHTML = ''
    };

}