import React, { Component } from 'react';
import Cat from './components/Cats'
import cats from './cats.json'
import Nav from './components/Nav'

class App extends Component {
  
  state = {
    clicked: [],
    score: 0,
    highScore: 0
   }
  
   randomCat = () => {
    const newArr = [];
      while(newArr.length !== cats.length){
        let cat = cats[Math.floor(Math.random()*cats.length)];
        if(newArr.indexOf(cat)<0){
          newArr.push(cat)
        }
      }
    return newArr
  }

  updateClicked = name => {
    if(this.state.clicked.indexOf(name)>-1){
      alert('Game Over! Play again to beat your high score.')
      this.setState({ clicked: [] })
    
      if(this.state.score > this.state.highScore){
        this.setState({ highScore: this.state.score })
      }

      this.setState({ score: 0 })
      
      return;

    } else {
      var score = this.state.score;
      score++;

      if(score > this.state.highScore){
        this.setState({ highScore: score })
      }
      this.setState({ score: score })
    }

    let clicked = this.state.clicked
    clicked.push(name)    
    this.setState({ clicked })
    console.log(this.state.clicked)
  }
 
  render() {
    return (
      <div>
        <Nav score={this.state.score} highScore={this.state.highScore}/>
          { this.randomCat().map(e => 
              ( 
                <Cat  updateClicked={this.updateClicked} 
                        name={e.name} 
                        image={e.image}/> 
              ))
          }
      </div>
    );
  }
}

export default App;