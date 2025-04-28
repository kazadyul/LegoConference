// import React, {useEffect, useState} from "react";
//
// const Gallery = () => {
//
//     useEffect(() => {
//         loadGallery();
//     }, []);
//
//     return (
//         <section id="gallery" className="py-5">
//             <div className="container">
//                 <h2>Gallery</h2>
//                 <p>The models are updated as more participants are registering!</p>
//                 <div id="lego-gallery" className="row"></div>
//             </div>
//         </section>
//     )
// }
//
// const fetchSetData = async (setNum) => {
//     const API_KEY = '65cf97d8d7c9de0fc778455edb714457';
//     const response = await fetch(`https://rebrickable.com/api/v3/lego/sets/${setNum}/?key=${API_KEY}`);
//     return response.json();
// }
//
// const loadGallery = async () => {
//     const setNums = ["21318-1", "10271-1", "75308-1", "42115-1", "40379-1"];
//     const gallery = document.getElementById('lego-gallery');
//
//     for (const setNum of setNums) {
//         const set = await fetchSetData(setNum);
//         const card = document.createElement('div');
//         card.className = 'col-md-3 gallery-item';
//         card.innerHTML = `
//                     <div class="card">
//                         <public src="${set.set_img_url}" class="card-public-top" alt="${set.name}">
//                         <div class="card-body">
//                             <h5 class="card-title">${set.name}</h5>
//                             <a href="https://rebrickable.com/sets/${set.set_num}/" target="_blank" class="btn btn-outline-dark">View Details</a>
//                         </div>
//                     </div>
//                 `;
//         gallery.appendChild(card);
//     }
// }
//
//
//
// export default Gallery;

import React from "react";

const Gallery = ({ galleryData }) => {
    return (
        <section id="gallery" className="py-5">
            <div className="container">
                <h2>Gallery</h2>
                <p>The models are updated as more participants are registering!</p>
                <div id="lego-gallery" className="row">
                    {galleryData.map((set) => (
                        <div key={set.set_num} className="col-md-3 gallery-item">
                            <div className="card">
                                <img src={set.set_img_url} className="card-img-top" alt={set.name} />
                                <div className="card-body">
                                    <h5 className="card-title">{set.name}</h5>
                                    <a href={`https://rebrickable.com/sets/${set.set_num}/`} target="_blank" className="btn btn-outline-dark" rel="noopener noreferrer">
                                        View Details
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
