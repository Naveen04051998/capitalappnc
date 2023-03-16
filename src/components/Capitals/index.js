// eslint-disable-next-line
import React, {Component} from 'react'

import './index.css'

// eslint-disable-next-line
const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]
// const array = ['naveen', 'ajay', 'akshay']
// Write your code here
// eslint-disable-next-line
export default class Capitals extends Component {
  // eslint-disable-next-line
  state = {activeId: countryAndCapitalsList.id, name: ''}

  DropDown = (event, value) => {
    this.setState({name: value})
  }

  render() {
    const {name} = this.state
    const {activeId} = this.state
    console.log(activeId)
    return (
      <div className="container">
        <div className="container-2">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="container-3">
            <div className="align">
              <label htmlFor="cars">is Capital of which Country</label>
            </div>
            <div>
              <div>
                <select onChange={this.DropDown}>
                  {countryAndCapitalsList.map(value => (
                    <option id={value.id}>{value.capitalDisplayText}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <h1>{name}</h1>
        </div>
      </div>
    )
  }
}
