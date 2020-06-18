import React, { Component } from 'react';
import BeerPanel from './BeerPanel';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theBeers: [],
    }
  }

  fetchData() {
    fetch('https://api.punkapi.com/v2/beers')
    .then(response => response.json())
    .then((theseBeers) => {
      this.setState({
        theBeers: theseBeers,
      }, () => {
        console.log(`The beers retrieved are ${this.state.theBeers}`);
      });
    });
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    let theBeerPanels = [];
    for(let i = 0; i < this.state.theBeers.length; i++) {
      theBeerPanels.push(<BeerPanel beer={this.state.theBeers[i]} />)
    }
    return (
      <div className='App'>
        {theBeerPanels}
      </div>
    );
  }

}
export default App;
