import React from "react";
import "./../styles/global.scss";
import NavbarCustom from "./../components/NavbarCustom";
import IndexPage from "./index";


import { Switch, Route, Router } from "./../util/router.js";
import NotFoundPage from "./not-found.js";
import Footer from "./../components/Footer";
import "./../util/analytics.js";
import {CookiesProvider} from "react-cookie";
// import logo from './../Logo-white.png';
// import blacklogo from './../Logo-black';

function App(props) {
 
  return (
    <CookiesProvider>
    <Router>
      <>
        <NavbarCustom
          bg="primary"
          variant="dark"
          expand="md"
          logo={require("./../Logo-white.png")}
        />

        <Switch>
          <Route exact path="/" component={IndexPage} />

          <Route component={NotFoundPage} />
        </Switch>

        <Footer
          bg="white"
          textColor="dark"
          size="md"
          bgImage=""
          bgImageOpacity={1}
          description="Statistics and Statistics related symptoms"
          copyright=""
          logo={require("./../Logo-black.png")}
        />
      </>
    </Router>
    </CookiesProvider>
  );
}

export default App;
