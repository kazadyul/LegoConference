import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import About from "./About";
import Schedule from "./Schedule";
import Gallery from "./Gallery";
import Registration from "./Registration";
import Contact from "./Contact";
import RegForm from "./RegForm";

function App() {
    const [galleryData, setGalleryData] = useState([]);
    const [isOnline, setIsOnline] = useState(navigator.onLine);

    useEffect(() => {
        loadGallery();

        const handleOnline = () => setIsOnline(true);
        const handleOffline = () => setIsOnline(false);

        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);

        return () => {
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffline);
        };
    }, []);

    async function loadGallery() {
        if (!isOnline) {
            console.log("User is offline, skipping gallery data fetch");
            return;
        }
        const setNums = ["21318-1", "10271-1", "75308-1", "42115-1", "40379-1"];
        const fetchedData = await Promise.all(
            setNums.map(async (setNum) => {
                const response = await fetch(
                    `https://rebrickable.com/api/v3/lego/sets/${setNum}/?key=65cf97d8d7c9de0fc778455edb714457`
                );
                return response.json();
            })
        );
        setGalleryData(fetchedData);
    }

    return (
        <div className="App">
            <Navbar />
            <Header />
            {!isOnline && (
                <p
                    style={{
                        color: "red",
                        textAlign: "center",
                        margin: "20px 0",
                    }}
                >
                    You are currently offline. Some features may be unavailable.
                </p>
            )}            <About />
            <Schedule />
            <Gallery galleryData={galleryData} />
            <Registration />
            <Contact />
            <RegForm />
        </div>
    );
}

export default App;
