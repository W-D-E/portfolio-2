import React from 'react';

export let formFields = {
  name : '',
  email: '',
  message: ''
}

export default class Formulaire extends React.Component {

  constructor () {
    super();
    this.state = {
      name: '',
      email: '',
      message: '',
      display: 'none'
     };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.afficherMessage = this.afficherMessage.bind(this);
    this.submitMessage = this.submitMessage.bind(this);

  }

  handleNameChange(e) {
    this.setState({ name : e.target.value});
  }

  handleEmailChange (e) {
    this.setState({ email : e.target.value});
  }

  handleMessageChange (e) {
    this.setState({ message : e.target.value});
  }

  afficherMessage() {
    this.setState({display: "flex"});
  }

  handleLogin (e) {
    e.preventDefault();

    formFields = {
      name: this.refs.nom.value,
      email: this.refs.email.value,
      message: this.refs.message.value
    };

    this.myFormRef.reset();

  }

  envoyerMessage() {
    Meteor.call('sendEmail',
      '3xhuit@gmail.com',
      formFields.email,
      formFields.name,
      formFields.message
    );
  }

  submitMessage(e) {
    this.handleLogin(e);
    this.envoyerMessage();
    this.afficherMessage();
  }

  render () {
    return (
      <div className="wrapper form__wrap">
        <div>
          <h2 className="title">Contactez-moi.</h2>
        </div>
        <form id="contact" className="form" ref={(el) => this.myFormRef = el}>
          <input className="form__item form__name" ref="nom" type="text" name="name" value={this.state.name} onChange={this.handleNameChange} placeholder="Nom et prénom"></input>
          <input className="form__item form__email" ref="email" type="email" name="email" value={this.state.email} onChange={this.handleEmailChange} placeholder="Votre adresse email"></input>
          <textarea className="form__item form__textarea" ref="message" name="message" value={this.state.message} onChange={this.handleMessageChange} placeholder="Votre message"></textarea>
          <button onClick={this.submitMessage} className="form__item form__button" type="submit">Envoyer</button>
        </form>
        <div style={{display: this.state.display}} className="form__success-message">
          <i className="far fa-check-circle"></i>
          <p>Message envoyé!</p>
        </div>
      </div>
    );
  }
}
