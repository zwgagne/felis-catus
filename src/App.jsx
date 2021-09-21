import React from "react";


import CatScreen from "./cat/CatScreen";

class App extends React.Component {
  render() {
    return (
      <div className="gallery">
            <div className="CatImage">
          <CatScreen />
          </div>
          </div>
    );
  }
}

export default App;