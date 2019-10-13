import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import cards from "./cards.json";

class App extends Component {
  state = {
    cards,
    score: 0,
    highscore: 0
  };

  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({ highscore: this.state.score });
    }
    this.state.cards.forEach(card => {
      card.count = 0;
    });
    alert(`Game Over`);
    this.setState({ score: 0 });
    return true;
  };

  handleClickCount = id => {
    this.state.cards.find((image, i) => {
      if (image.id === id) {
        if (cards[i].count === 0) {
          cards[i].count = cards[i].count + 1;
          this.setState({ score: this.state.score + 1 });
          this.state.cards.sort(() => Math.random() - 0.5);
          return true;
        } else {
          this.gameOver();
        }
      }
    });
  };

  render() {
    return (
      <Wrapper>
        <Header score={this.state.score} highscore={this.state.highscore}>
          Clicky Game
        </Header>
        {this.state.cards.map(card => (
          <Card
            handleClickCount={this.handleClickCount}
            id={card.id}
            key={card.id}
            image={card.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
