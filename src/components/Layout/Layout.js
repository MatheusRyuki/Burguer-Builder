import React from 'react';

const layout = ( props ) => (
  <div>Toolbar, SideDrawer, Backdrop</div>
  <main>
    {props.children}
  </main>
);
