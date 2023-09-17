import React from 'react';
import Toast from 'react-bootstrap/Toast';

function Tost({bg, text, isError}) {

  return (
    <>
        <Toast
          className="d-inline-block m-1"
          position={isError ? 'top-end' : 'bottom-end'}
          bg={bg.toLowerCase()}
          delay={3000} autohide
        >
          <Toast.Body className={'text-white'}>
            {text}
          </Toast.Body>
        </Toast>
    </>
  );
}

export default Tost;