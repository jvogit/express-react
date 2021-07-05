import React from 'react';
import Routes from './Routes';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, BaseProvider } from 'baseui';
import "./App.css";

const engine = new Styletron();

function App() {

  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <div className="App">
          <Routes />
        </div>
      </BaseProvider>
    </StyletronProvider>
  );
}

export default App;
