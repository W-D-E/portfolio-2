import React from 'react'; // done for us behind the scene
import ReactDOM from 'react-dom';

import { Meteor } from 'meteor/meteor';

import Jumbo from './../imports/client/ui/Jumbo';
import Presentation from './../imports/client/ui/Presentation';
import Projets from './../imports/client/ui/Projets';
import Technologies from './../imports/client/ui/Technologies';
import Formulaire from './../imports/client/ui/Formulaire';
import Footer from './../imports/client/ui/Footer';



Meteor.startup(() => {
  // code to run on server at startup

  let jsx = (
    <div>
      <Jumbo/>
      <Presentation/>
      <Projets/>
      <Formulaire/>
      <Technologies/>
      <Footer />
    </div>

  );
  ReactDOM.render(jsx, document.getElementById('app'));
});
