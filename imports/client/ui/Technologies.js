import React from 'react';
import Urls from '/imports/client/api/imgs_api';

console.log(Urls);

export default class Technologies extends React.Component {


    renderImage(url, name, key) {
        return (
                    <img key={key} className="technologies__item" src={window.location.origin + url} alt={name} />
              );
      }

    render () {
        return (
          <div className="technologies">
            {Urls.map((imgs) => {
              return this.renderImage(imgs.url, imgs.name, imgs.key);
            })}
          </div>

        );
    }
}
