import { useState } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./layout/Header";
import Footer from "./layout/Footer";

import Home from "./pages/Home";
import AgeVerification from "./pages/AgeVerification";

function App() {
  const [verified, setVerified] = useState(false);

  return (
    <div>
      {!verified ? (
        <AgeVerification setVerified={setVerified} />
      ) : (
        <>
          <Header />
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
