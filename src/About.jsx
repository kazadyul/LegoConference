import React, {useEffect} from "react";

const About = () => {
    useEffect(() => {
        let video = document.getElementById("video-player");
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    video.pause();
                }
            });
        }, {
            threshold: 0.2
        });
        observer.observe(video);
    })
    return (
        <section id="about" className="py-5">
            <div className="container">
                <h2>About the Conference</h2>
                <p>The LEGO Conference is a place where enthusiasts, inventors, and LEGO fans come together.</p>
                <video id="video-player" controls>
                    <source src="preview_video.mp4" type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
            </div>
        </section>
    )
}

export default About;