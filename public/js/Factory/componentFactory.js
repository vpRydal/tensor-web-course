class ComponentFactory {
    static create(component, options) {
        return new component(options || {});
    }
}

export default ComponentFactory