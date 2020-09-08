import React from 'react';

import { exampleStyle, logoStyle }  from './styles/commonStyles';
import reactLogo from './images/logo.svg';

const helloString = 'Hello World!';

function App() {
  return (
    <div style={exampleStyle}>
      <img src={reactLogo} style={logoStyle} height="100" alt="logo" />
      {helloString}
    </div>
  );
}

export default App;
