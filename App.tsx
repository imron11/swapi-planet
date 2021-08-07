import React from "react";
import { Router, Scene, Stack } from "react-native-router-flux";

import BootComponent from "./src/main/boot/boot.component";
import SigninComponent from "./src/main/signin/signin.component";
import PlanetComponent from "./src/main/planet/planet.component";
import WishlistComponent from "./src/main/wishlist/wishlist.component";

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
          <Scene 
            key={"SigninPage"}
            component={SigninComponent}
            hideNavBar
          />
          <Scene 
            key={"PlanetPage"}
            component={PlanetComponent}
            hideNavBar
          />
          <Scene 
            key={"WishlistPage"}
            component={WishlistComponent}
            hideNavBar
          />
        </Stack>
      </Router>
    </>
  )
}

export default App;