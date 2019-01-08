import React, { Component } from 'react';
import Peoplecard from './components/PeopleCard'
import Navbar from './components/Navbar'
// import people from './people.json'

class App extends Component {

  // state = {
  //   people:,
  //   currentScore:,
  //   highScore:,
  //   selectedPeople:,
  // }

  // App Check
  componentDidMount() {
    console.log('Components are loaded');
  };

  // Shuffle People once a person is clicked
  shufflePeople() {

  };

  // Render these components to the page
  render() {
    return (
      <div>
        <Navbar />
        <Peoplecard />
      </div>
    )
  };
}

export default App;
