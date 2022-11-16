import React from 'react';

import { Button } from 'react-bootstrap';

const MyButton = (props) => {
  return (
    <Button variant="success" {...props}>
      {props.children}
    </Button>
  );
};

export default MyButton;