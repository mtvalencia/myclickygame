import React, { Component } from "react";
import CatCard from "./components/CatCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import cats from "./cats.json";

class App extends Component {

  state = {
    cats
  };


  render() {
    return (
      <Wrapper>
        <Title>Click on a cat?</Title>
        {this.state.cats.map(cat => (
          <CatCard
            name={cat.name}
            image={cat.image}
            ptvalue={cat.ptvalue}
            timesClicked={cat.timesClicked}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
