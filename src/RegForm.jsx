import React, { useEffect } from 'react'

const RegForm = () => {
    useEffect(() => {
        const modalEl = document.getElementById('regForm')
        const modal = new window.bootstrap.Modal(modalEl)

        // When the modal shows, push a history entry
        modalEl.addEventListener('shown.bs.modal', () => {
            window.history.pushState({ modalOpen: true }, '')
        })

        // Back/forward support
        const onPopState = (event) => {
            if (event.state && event.state.modalOpen) {
                modal.show()
            } else {
                modal.hide()
            }
        }
        window.addEventListener('popstate', onPopState)

        // set initial disabled state
        toggleSubmit()

        return () => {
            modalEl.removeEventListener('shown.bs.modal', () => {})
            window.removeEventListener('popstate', onPopState)
        }
    }, [])

    return (
        <div
            className="modal fade"
            id="regForm"
            tabIndex="-1"
            aria-labelledby="registerModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog">
                <div className="modal-content">

                    <div className="modal-header">
                        <h5 className="modal-title" id="registerModalLabel">
                            Register for the LEGO Conference
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        />
                    </div>

                    <div className="modal-body">
                        <form>

                            <div className="form-group">
                                <label htmlFor="nameInput" className="col-form-label">
                                    Name:
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="nameInput"
                                    onBlur={(e) => { validateNameInput(e); toggleSubmit() }}
                                    onChange={(e) => { removeNameError(e); toggleSubmit() }}
                                />
                                <span id="nameError" className="error" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="emailInput">Email address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="emailInput"
                                    placeholder="name@example.com"
                                    onBlur={(e) => { validateEmailInput(e); toggleSubmit() }}
                                    onChange={(e) => { removeEmailError(e); toggleSubmit() }}
                                />
                                <span id="emailError" className="error" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="selectInput">Select</label>
                                <select
                                    className="form-control"
                                    id="selectInput"
                                    defaultValue="default"
                                    onChange={toggleSubmit}
                                >
                                    <option value="default" disabled>
                                        Choose role...
                                    </option>
                                    <option value="visitor">
                                        I want to just be a visitor
                                    </option>
                                    <option value="showcase">
                                        I want to showcase my work
                                    </option>
                                    <option value="presentor">
                                        I want to show and talk about my work
                                    </option>
                                    <option value="workshop">
                                        I want to lead a workshop
                                    </option>
                                    <option value="volunteer">
                                        I want to be a volunteer
                                    </option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="exampleFormControlTextarea1">
                                    Any additional comments?
                                </label>
                                <textarea
                                    className="form-control"
                                    id="exampleFormControlTextarea1"
                                    rows="3"
                                />
                            </div>

                        </form>
                    </div>

                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-outline-secondary rounded-pill cancel"
                            data-bs-dismiss="modal"
                        >
                            Cancel
                        </button>
                        <button
                            type="button"
                            className="btn btn-warning rounded-pill submit"
                            data-bs-dismiss="modal"
                            disabled
                        >
                            Submit
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

const validateEmailInput = (e) => {
    const emailInput = document.getElementById('emailInput')
    const emailError = document.getElementById('emailError')
    const emailText = emailInput.value
    if (!emailText) {
        emailError.textContent = 'Email is required.'
    } else if (!/\S+@\S+\.\S+/.test(emailText)) {
        emailError.textContent = 'Please enter a valid email address.'
    } else {
        emailError.textContent = ''
    }
}

const validateNameInput = (e) => {
    const nameInput = document.getElementById('nameInput')
    const nameError = document.getElementById('nameError')
    const nameText = nameInput.value.trim()
    nameError.textContent = nameText ? '' : 'Name is required'
}

const removeNameError = (e) => {
    const nameError = document.getElementById('nameError')
    nameError.textContent = ''
}

const removeEmailError = (e) => {
    const emailError = document.getElementById('emailError')
    emailError.textContent = ''
}

const toggleSubmit = () => {
    const btn = document.querySelector('.submit')
    const nameErr = document.getElementById('nameError').textContent
    const emailErr = document.getElementById('emailError').textContent
    const nameEl = document.getElementById('nameInput').value.trim()
    const emailEl = document.getElementById('emailInput').value.trim()
    const role = document.getElementById('selectInput').value
    btn.disabled = !(
        nameEl &&
        emailEl &&
        !nameErr &&
        !emailErr &&
        role !== 'default'
    )}

export default RegForm
