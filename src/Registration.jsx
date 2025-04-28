import React from "react";

const Registration = () => {
    const openModal = () => {
        window.history.pushState(null, null, window.location.href);
    };
    return (
        <section id="register" className="py-5 bg-light">
            <div className="container">
                <h2>Registration</h2>
                <p>Register now and get access to this unique event!</p>
                <button type="button"
                        className="btn btn-outline-dark rounded-pill"
                        data-bs-toggle="modal"
                        data-bs-target="#regForm"
                        onClick={openModal}>
                    Register Now &gt;
                </button>
            </div>
        </section>
    )
}

export default Registration;