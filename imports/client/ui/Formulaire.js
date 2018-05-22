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
     };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
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

  handleLogin (e) {
    e.preventDefault();
    formFields.name = this.state.name;
    formFields.email = this.state.email;
    formFields.message = this.state.message;

    Meteor.call('sendEmail',
      '3xhuit@gmail.com',
      formFields.email,
      formFields.name,
      formFields.message
    );


  }

  render () {
    return (
      <div className="wrapper">
        <div>
          <h2 className="title">Contactez-moi.</h2>
        </div>
        <form className="form">
          <input className="form__item form__name" type="text" name="name" value={this.state.name} onChange={this.handleNameChange} placeholder="Nom et prénom"></input>
          <input className="form__item form__email" type="email" name="email" value={this.state.email} onChange={this.handleEmailChange} placeholder="Votre adresse email"></input>
          <textarea className="form__item form__textarea" name="message" value={this.state.message} onChange={this.handleMessageChange} placeholder="Votre message"></textarea>
          <button onClick={this.handleLogin} className="form__item form__button" type="submit">Envoyer</button>
        </form>
      </div>
    );
  }
}
