import React, { useEffect } from 'react'

const Map = () => {
    useEffect(() => {
        const map = L.map("map").setView([50.0755, 14.4378], 14);
        L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        }).addTo(map);
        L.marker([50.0755, 14.4378])
            .addTo(map)
            .bindPopup("LEGO Conference Location")
            .openPopup();
    }, []);
    return <div id="map" style={{ height: "400px" }}></div>
}

export default Map;