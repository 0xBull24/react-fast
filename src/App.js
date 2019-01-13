import React, { Component } from 'react';
import Peoplecard from './components/PeopleCard'
import Navbar from './components/Navbar'
import Rules from './components/_Rules'
import people from './people.json'
import './App.css'
const shuffle = require('shuffle-array');

class App extends Component {

  state = {
    people,
    currentScore: 0,
    highScore: 0,
    selectedPeople: [],
  }

  // On load shuffle the json
  componentDidMount() {
    const newShuffle = this.shufflePeople(this.state.people);
    this.setState({ people: newShuffle});
  };

  // Shuffle people from the json
  shufflePeople = () => {
    const shufflePeople = shuffle(this.state.people);
    return shufflePeople;
  };

  // Pass the id from the clicked card to game functions
  // @param {number} id - id of the item in json
  handleClick = id => {
    this.checkPeople(id);
  }

  // Check if a person has been clicked
  // If person is not clicked, add them to a temp array
  // else do something with state: highscore
  // @param {number} id - id of the item in json
  checkPeople = id => {
    if (!this.state.selectedPeople.includes(id)) {
      this.state.selectedPeople.push(id);
      this.incrementScore();
    } else {
      this.handleHighscore();
    }
  }

  // Shuffle cards
  // Increment the current score
  incrementScore = () => {
    const people = this.shufflePeople();
    const newScore = this.state.currentScore + 1;
    this.setState({ people, currentScore: newScore });
  }

  // If same image is clicked, handle it by setting the highscore
  // and reset the game
  handleHighscore = () => {
    
    if(this.state.currentScore > this.state.highScore) {
      const people = this.shufflePeople();
      const highestScore = this.state.currentScore
      this.setState({
        people,
        currentScore: 0,
        highScore: highestScore,
        selectedPeople: []
      });
    } else {
      const people = this.shufflePeople();
      this.setState({
        people,
        currentScore: 0,
        selectedPeople: []
      });
    }
  }

  // Render these components to the page
  render() {
    return (
      <div>
        <Navbar 
        currentScore={this.state.currentScore}
        highScore={this.state.highScore}/>
        <Rules />
        <div className='container'>
          <div className='row'>
            {this.state.people.map(people => {
              return (
                <div key={people.id}>
                <Peoplecard 
                handleClick={this.handleClick}
                {...people}/>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  };
}

export default App;
