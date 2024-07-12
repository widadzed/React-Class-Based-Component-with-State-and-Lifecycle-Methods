import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'widad zed',
        bio: 'A software developer <3.',
        imgSrc: 'https://via.placeholder.com/150',
        profession: 'Software Developer'
      },
      shows: false,
      mountedTime: null,
      intervalTime: 0
    };
  }

  componentDidMount() {
    this.setState({ mountedTime: new Date() });

    this.interval = setInterval(() => {
      const { mountedTime } = this.state;
      if (mountedTime) {
        this.setState({ intervalTime: Math.floor((new Date() - mountedTime) / 1000) });
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow = () => {
    this.setState({ shows: !this.state.shows });
  }

  render() {
    const { person, shows, intervalTime } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <button onClick={this.toggleShow}>
            {shows ? 'Hide Profile' : 'Show Profile'}
          </button>

          {shows && (
            <div>
              <img src={person.imgSrc} alt="Profile" />
              <h1>{person.fullName}</h1>
              <p>{person.bio}</p>
              <h2>{person.profession}</h2>
            </div>
          )}

          <p>Time since mounted: {intervalTime} seconds</p>
        </header>
      </div>
    );
  }
}

export default App;

