import React from "react";
import { Router, Scene, Stack } from "react-native-router-flux";

import BootComponent from "./src/main/boot/boot.component";

// To Allow network debugger
XMLHttpRequest = (global as any).originalXMLHttpRequest
  ? (global as any).originalXMLHttpRequest
  : (global as any).XMLHttpRequest;

const App = () => {
  return (
    <>
      <Router>
        <Stack
          key={'root'}
        >
          {/* all page */}
          <Scene
            key={'BootPage'}
            component={BootComponent}
            hideNavBar
          />
        </Stack>
      </Router>
    </>
  )
}

export default App;