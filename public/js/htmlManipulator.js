/**
 * @module HTMLManipulator
 * @export HTMLManipulator
 */

/**
 * @class HTMLManipulator
 *
 * @method createElement
 */
class HTMLManipulator {

    /**
     * @param {string} tag
     * @param {string, array} elmClass
     * @param {string} text
     * @return {HTMLElement}
     */
    static createElement(tag, elmClass='', text='') {
        const element = document.createElement(tag)

        if (Array.isArray(elmClass)) {
            element.classList.add(...elmClass)
        } else {
            element.classList.add(elmClass)
        }
        element.textContent = text

        return element
    }
}

export default HTMLManipulator