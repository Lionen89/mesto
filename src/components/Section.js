export default class Section {
    constructor({
        items,
        renderer
    }, containerSelector) {
        this._items = items;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    };

    addItem(element) {
        this._container.prepend(element);
    };

    renderItem() {
        this.clear();
        this._items.forEach((item) => {
            this.addItem(this._renderer(item));
        });
    };

    clear() {
        this._container.innerHTML = ''
    };

}