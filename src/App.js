import React, { Component } from 'react';
import Peoplecard from './components/PeopleCard'
import Navbar from './components/Navbar'
import people from './people.json'
const shuffle = require('shuffle-array');

class App extends Component {

  state = {
    people,
    currentScore: 0,
    highScore: 0,
    selectedPeople: [],
  }

  // App Check
  componentDidMount() {
    console.log('Components are loaded');
    console.log(this.state);
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

  // Render these components to the page
  render() {
    return (
      <div>
        <Navbar 
        currentScore={this.state.currentScore}
        highScore={this.state.highScore}/>
        <Peoplecard />
      </div>
    )
  };
}

export default App;
