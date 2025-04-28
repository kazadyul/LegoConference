import React, {useEffect, useState} from "react";
import Map from "./Map";

const Contact = () => {
    const [isOnline, setIsOnline] = useState(navigator.onLine);

    useEffect(() => {

        const handleOnline = () => setIsOnline(true);
        const handleOffline = () => setIsOnline(false);

        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);

        return () => {
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffline);
        };
    }, []);

    return (
        <section id="contact" className="py-5">
            <div className="container">
                <h2>Contact</h2>
                <p>Have any questions? Contact us!</p>
                <a href="https://www.instagram.com/cvutpraha/?hl=en" target="_blank">
                    <img id="instagramIcon" src="insta.png" alt="Instagram" />
                </a>
                {isOnline ? <Map /> : <p style={{ color: "red" }}>Map is unavailable while offline.</p>}            </div>
        </section>
    )
}

export default Contact;