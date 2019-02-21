import React from 'react';

const buildControl = (props) => {
  <div>
    <div>{props.label}</div>
    <button>Menos</button>
    <button>Mais</button>
  </div>
};


export default buildControl;
