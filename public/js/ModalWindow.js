class Modal {
    _modal

    close() {
        this._modal.classList.remove('modal-show')
    }

    show() {
        this._modal.classList.add('modal-show')
    }

    /**
     *
     * @param {string} content
     */

    render(content) {
        let modal = this.renderModal()
        let body = this.renderBody()
        let title = this.renderTitle()
        let dialog = this.renderDialog()
        let modalContent = this.renderContent()

        body.innerHTML = content

        modalContent.appendChild(title)
        modalContent.appendChild(body)

        dialog.appendChild(modalContent)

        modal.appendChild(dialog)


        this._modal = modal
        document.body.appendChild(modal)
    }

    renderBody() {
        let body = document.createElement('div')

        body.classList.add('modal-body')

        return body
    }

    renderContent() {
        let content = document.createElement('div')

        content.classList.add('modal-content')

        return content
    }

    renderModal() {
        let modal = document.createElement('div')

        modal.classList.add('modal')

        return modal
    }

    renderDialog() {
        let dialog = document.createElement('div')

        dialog.classList.add('modal-dialog')

        return dialog
    }

    renderTitle() {
        let titleDiv = document.createElement('div')
        titleDiv.classList.add('modal-title')

        let title = document.createElement('h2')
        title.innerHTML = this._title

        titleDiv.appendChild(title)
        titleDiv.appendChild(this.renderCloseBtn())

        return titleDiv
    }

    renderCloseBtn() {
        let close = document.createElement('span')

        close.innerText = "x"
        close.classList.add('modal-close')

        close.addEventListener('click', (event) => {
            this.close()
        })

        return close;
    }

    set title(title) {
        this._title = title
    }

    get title() {
        return this._title
    }
}

export default Modal