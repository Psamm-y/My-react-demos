import React from 'react';
import { createPortal } from 'react-dom';
const PopupContent = ({ copied }) => {
  return createPortal(
    //render through a different portal other than the root div in the index.html file
    <section>
      {copied && (
        <div style={{ position: 'absolute', bottom: '3rem' }}>
          Content copied
        </div>
      )}
    </section>,
    document.querySelector('#popup-content') //specifying the portal
    //popup-content is a div I created in the index.html
  );
};

export default PopupContent;
