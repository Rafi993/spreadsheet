import React from "react";
import { Reset } from "styled-reset";

import Sheet from "./Sheet";

const App = () => {
  return (
    <>
      <Reset />
      <Sheet numberOfRows={10} numberOfColumns={10} />
    </>
  );
};

export default App;
