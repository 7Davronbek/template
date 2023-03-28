import React from "react";
import WithAppProviders from "./WithAppProviders";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
        libero architecto ullam. Soluta officia sapiente possimus odio commodi
        perspiciatis, necessitatibus nisi totam qui aut delectus provident,
        veniam, nam omnis amet!
      </BrowserRouter>
    </>
  );
};

export default WithAppProviders(App)();
