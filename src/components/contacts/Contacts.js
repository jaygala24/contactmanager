import React, { Component } from 'react';
import Contact from './Contact';
import { Consumer } from '../../Context';

class Contacts extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          let contactList = contacts.map(contact => (
            <Contact key={contact.id} contact={contact} />
          ));
          return (
            <React.Fragment>
              <h1 className="display-4 md-2">
                <span className="text-danger">Contact</span> List
              </h1>
              {contactList}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
