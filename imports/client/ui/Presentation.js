import React from 'react';



export default class Presentation extends React.Component {

    render () {

      return (
          <div className="presentation wrapper">
            <div className="my-photo">
              <img className="my-photo__item" src={window.location.origin + '/imgs/angry-cat.jpg'} alt="Photo of Warren EURICLIDE"/>
            </div>
            <div className="bio">
              <h3 className="title bio__title">A propos de moi.</h3>
              <h5 className="bio__subtitle">Etudiant Full Stack Javascript</h5>
              <p className="bio__description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Eaque quisquam asperiores quidem corporis distinctio ducimus natus saepe, numquam ab laudantium,
                dignissimos, exercitationem at cumque est, enim quos architecto explicabo itaque.
              </p>
            </div>
          </div>
      );
    }
}
