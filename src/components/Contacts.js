import React, { Component } from 'react';
import Contact from './Contact';

class Contacts extends Component {
  state = {
    contact: [
      {
        id: 1,
        name: 'John Doe',
        email: 'johndoe@gmail.com',
        phone: '555-555-5555'
      },
      {
        id: 2,
        name: 'Mike Johnson',
        email: 'mike@gmail.com',
        phone: '222-222-2222'
      },
      {
        id: 3,
        name: 'Karen Smith',
        email: 'karen@gmail.com',
        phone: '333-333-3333'
      }
    ]
  };

  render() {
    const { contact } = this.state;
    let contactList = contact.map(contact => (
      <Contact key={contact.id} contact={contact} />
    ));

    return <div>{contactList}</div>;
  }
}

export default Contacts;
