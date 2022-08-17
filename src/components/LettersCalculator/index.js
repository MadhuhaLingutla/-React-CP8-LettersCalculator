// Write your code here.

import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {searchInput: '', count: 0}

  getsearchInput = event => {
    this.setState({
      searchInput: event.target.value,
      count: event.target.value.length,
    })
  }

  render() {
    const {searchInput, count} = this.state

    return (
      <div className="container">
        <div className="content">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label htmlFor="search-bar" className="instruction">
            Enter the phrase
          </label>
          <input
            type="text"
            value={searchInput}
            className="search-bar"
            onChange={this.getsearchInput}
            placeholder="Enter the phrase"
            id="search-bar"
          />
          <p className="count">No.of letters: {count}</p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters
          calculator"
          className="image"
        />
      </div>
    )
  }
}

export default LettersCalculator
