import React from 'react';
import ReactDOM from 'react-dom';

const styles = {
  transition: 'all .3s ease-out'
};
export default class Jumbo extends React.Component {

      constructor (props) {
        super(props);
        this.state = {
          width: 1,
          translateX: 0,
          translateX2: 0,
          height : 0,
          opacity: 0
         };
        this.animateBurger = this.animateBurger.bind(this);
        this.deployMenu = this.deployMenu.bind(this);
      }

    animateBurger() {
    this.setState({
      width: this.state.width < 1 ? 1 : .7,
      translateX: this.state.translateX > 1 ? 0 : 4,
      translateX2: this.state.translateX2 < 0 ? 0 : -4
    });
    this.deployMenu();
    }

    deployMenu () {
      this.setState({
        height: this.state.height < 1 ? 23 : 0,
        opacity: this.state.opacity === 0 ? 1 : 0
      })
    }

    render () {

      return (
        <div className="jumbo">
          <div className="header">
            <h1 className="logo">WDE</h1>

            <div onClick={this.animateBurger} className="burger"></div>
            <div className='burger-1' style={{...styles, width: this.state.width + 'em', transform: 'translateX(' + this.state.translateX + 'px)'}}></div>
            <div className='burger-1-top' style={{...styles, width: this.state.width + 'em', transform: 'translateX(' + this.state.translateX + 'px)'}}></div>
            <div className='burger-1-bottom' style={{...styles, width: this.state.width + 'em', transform: 'translateX(' + this.state.translateX + 'px)'}}></div>
            <div className='burger-2' style={{...styles, width: this.state.width + 'em', transform: 'translateX(' + this.state.translateX2 + 'px)'}}></div>
            <div className='burger-2-top' style={{...styles, width: this.state.width + 'em', transform: 'translateX(' + this.state.translateX2 + 'px)'}}></div>
            <div className='burger-2-bottom' style={{...styles, width: this.state.width + 'em', transform: 'translateX(' + this.state.translateX2 + 'px)'}}></div>

            <header className="navigation">
              <a href="" className="navigation__item">Présentation</a>
              <a href="" className="navigation__item">Projets</a>
              <a href="" className="navigation__item">Contact</a>
            </header>
            <div style={{...styles, height: this.state.height + 'vh', opacity: this.state.opacity}} className="navigation__menu">
              <a href="" className="navigation__menu-item">Présentation</a>
              <a href="" className="navigation__menu-item">Projets</a>
              <a href="" className="navigation__menu-item">Contact</a>
            </div>
          </div>
          <div className="bienvenue">
            <h1 className="bienvenue__titre">Bienvenue Sur Mon Portfolio</h1>
          </div>
        </div>

      );
    }
}
