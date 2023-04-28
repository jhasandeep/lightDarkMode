// Write your code here
import {Component} from 'react'

import './index.css'

class Counter extends Component {
  state = {className: 'light', mode: 'Light Mode'}

  onIncrement = () => {
    this.setState(prevState =>
      prevState.className === 'light'
        ? {className: 'dark', mode: 'Dark Mode'}
        : {className: 'light', mode: 'Light Mode'},
    )
  }

  render() {
    const {className} = this.state
    const {mode} = this.state
    return (
      <div className="bg-container">
        <div className={className}>
          <h1 className="count">click to change mode</h1>
          <button className="button" type="button" onClick={this.onIncrement}>
            {mode}
          </button>
        </div>
      </div>
    )
  }
}

export default Counter
