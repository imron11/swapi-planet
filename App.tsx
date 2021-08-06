import React from "react";
import { Router, Scene, Stack } from "react-native-router-flux";

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
        </Stack>
      </Router>
    </>
  )
}

export default App;