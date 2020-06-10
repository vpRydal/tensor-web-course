class Observer {
    events = {}

    on(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = [callback]
        } else {
            this.events[eventName].push(callback)
        }
    }

    emit(eventName, props={}) {
        if (!this.events[eventName]) {
            console.error('Unknown event')
        }
        this.events[eventName].forEach(event => {
            event.call(props)
        })
    }
}

export default Observer