import React from 'react';



export default class Presentation extends React.Component {

    render () {

      return (
          <div className="presentation wrapper">
            <div id="present" className="my-photo">
              <img className="my-photo__item" src={window.location.origin + '/imgs/angry-cat.jpg'} alt="Photo of Warren EURICLIDE"/>
            </div>
            <div className="bio">
              <h3 className="title bio__title">A propos de moi.</h3>
              <h5 className="bio__subtitle">Etudiant Full Stack Javascript</h5>
              <p className="bio__description">
                My name is <span className="bio__name">Warren Daan EURICLIDE</span>. I'm actually learning how to build websites from the ground-up as a self-taught. I'm using my "Google skills" to search, find and absorb knowledge from different ressources all around the internet.
              </p>
              <p className="bio__description">
                The platforms that I use to progress as a web developper are mostly TeamTreeHouse, Udemy, FreeCodeCamp and Youtube.
              </p>
            </div>
          </div>
      );
    }
}
