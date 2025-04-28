import React, {useEffect} from "react";

const Header = () => {

    useEffect(() => {
        addListeners()
    })

    return (
        <header className="text-center py-5">
            <div className="container">
                <h1>Welcome to the LEGO Conference!</h1>
                <p className="lead">Discover the world of creativity and innovation with LEGO.</p>
            </div>
        </header>
    )
}

const addListeners = () => {
    const legoLogo = document.querySelector('.navbar-brand');
    const pic = document.querySelector('.lego-logo');
    legoLogo.addEventListener('mouseenter', () => {
        if (!pic.classList.contains('started')) {
            pic.classList.add('started');
        }
    });
    legoLogo.addEventListener('mouseleave', () => {
        pic.classList.remove('started');
    })
}

export default Header;