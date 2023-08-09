import React from 'react';
import Thriller from './assets/ThrillerVid.webp';
import StarWars from './assets/StarWarsVid.webp';
import JamesBond from './assets/2012Bondvid.webp';



function Work() {
    return (
        <div id="Work">
        <h1><strong>Portfolio</strong></h1>

                <div className="Work">
                
                <div className='Projects'><h3>"Thriller" Monster Movie Mashup</h3>
                    <a href="https://www.youtube.com/watch?v=gDTOCYXHPVA/"target="_blank">
                    <img className='image' src={Thriller} alt="Thriller" /></a>
                </div>

                <div className='Projects'><h3>Star Wars Saga</h3>
                    <a href="https://www.youtube.com/watch?v=SA5lnwm7M5o&t=610s/"target="_blank">
                    <img className='image' src={StarWars} alt="Star-Wars" /></a>
                   </div>

                <div className='Projects'><h3>James Bond 2012 50th Anniversary</h3>
                    <a href="https://www.youtube.com/watch?v=lR0dnPygu-A/"target="_blank">
                    <img className='image' src={JamesBond} alt="James-Bond" /></a>
                    </div>

                </div>
        </div>
    );
}

export default Work;