import React from 'react';

export default props => {
  return (
    <div>
      <h1 className="display-4">About Contact Manager</h1>
      <p className="lead">Simple app to manage contacts</p>
      <p className="text-secondary">Version 1.0.0</p>
    </div>
  );
};

// for accessing the params
// {props.match.params.id}
// where passed param name is id