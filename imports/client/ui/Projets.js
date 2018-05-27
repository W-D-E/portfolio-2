import React from 'react';

import Links from '/imports/client/api/projects_api';

export default class Projets extends React.Component {

    constructor(props) {
      super(props);
    }

    renderImage(url, name, key, link) {
        return (
                  <div key={key} className="projets__item" style={{background: 'url(' + window.location.origin + url + ')', backgroundSize: 'cover'}}>
                    {/* <img key={key} className="projets__img" src={window.location.origin + url} alt={name} /> */}
                    <div className="projets__modal">
                      <p className="projets__modal-title">{name}</p>
                      <a href={link} target="_blank"><i className="fas fa-link projets__modal-icon"></i></a>

                    </div>
                  </div>

              );
      }

    render () {
        return (
          <div className="wrapper projets">
            <h2 id="creations" className="title">Projets</h2>

            <div className="projets__wrap" >
              {Links.map((imgs) => {
                return this.renderImage(imgs.url, imgs.name, imgs.key, imgs.link);
              })}
            </div>

          </div>

        );
    }
}
