class Component {
    'use strict';

    constructor(options) {
        this._options = options;
        this._container = undefined;
        this._handlers = {};

    }

    render() {
        return `<div></div>`;
    }

    /**
     * помещает верстку компонента в dom
     * @param {HTMLElement} container контейнер в котором строиться верстка, куда поместить
     * @param {String} position insertAdjacentElement позиция куда помесить, до, в, вконец, после
     */
    mount(container, position='') {
        this.beforeMount();

        const newComponent = document.createElement('div');

        newComponent.innerHTML = this.render(this._options);

        this._container = newComponent.firstElementChild;

        container.insertAdjacentElement( position || 'beforeend', newComponent.firstElementChild);

        newComponent.remove();

        this.afterMount();
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

    beforeMount() {}

    afterMount() {}

    beforeUnmount() {}

    afterUnmount() {}

    get container() {
        return this._container
    }
}

export default Component;
