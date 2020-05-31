class Component {
    'use strict';

    constructor(options) {
        this._options = options;
        this._container = undefined;
        this._handlers = {};
        this._isMounted = false;
        this._id = this.randomInteger(1, 10000);

    }

    render() {
        return `<div></div>`;
    }

    /**
     * помещает верстку компонента в dom
     * @param {HTMLElement} container контейнер в котором строиться верстка, куда поместить
     * @param {String} position insertAdjacentElement позиция куда помесить, до, в, вконец, после
     */
    async mount(container, position='') {
        await this.beforeMount();

        const newComponent = document.createElement('div');

        newComponent.innerHTML = this.render(this._options);

        this._container = newComponent.firstElementChild;

        container.insertAdjacentElement( position || 'beforeend', newComponent.firstElementChild);

        newComponent.remove();

        this.afterMount(this._options);

        this._isMounted = true;

        return this
    }


    update() { }

    unmount() {
        this.beforeUnmount();

        this.removeContainer();

        this.afterUnmount();
    }

    removeContainer() {
        if (this._container) {
            this._container.remove();
            this._container = undefined;
        }
    }

    subscribeTo(target, eventName, handler) {
        const handlers = this._handlers[eventName] || [];

        handlers.push({
            target,
            handler
        });

        this._handlers[eventName] = handlers;

        target.addEventListener(eventName, handler);
    }

    hide() {
        this._container.style.display = "none"
        this._container.style.opacity = "0"
        this._container.style.visibility = "hidden"
    }

    show(options={}) {
        this._container.style.display = options.display || "block"
        this._container.style.opacity = "1"
        this._container.style.visibility = "visible"
    }

    isMounted() {
        return this._isMounted
    }

    beforeMount() {}

    afterMount() {}

    beforeUnmount() {}

    afterUnmount() {}

    get container() {
        return this._container
    }

    randomInteger(min, max) {
        let rand = min - 0.5 + Math.random() * (max - min + 1);

        return Math.round(rand);
    }
}

export default Component;
