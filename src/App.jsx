import React from 'react';

import TimeDisplay from './components/TimeDisplay';

import { exampleStyle, logoStyle }  from './styles/commonStyles';
import reactLogo from './images/logo.svg';

const helloString = 'Hello World!';

function App() {
  return (
    <div style={exampleStyle}>
      <img src={reactLogo} style={logoStyle} height="100" alt="logo" />
      {helloString}
      <TimeDisplay buttonText={'Check Time'} />
    </div>
  );
}

export default App;
