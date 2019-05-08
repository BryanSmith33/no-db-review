import React, { Component } from 'react'
import axios from 'axios'

class Event extends Component {
	constructor() {
		super()
		this.state = {
      selectedID: null,
      selectedEvent: null
		}
	}

	handleGetEventById = () => {
		axios.get(`/api/event/${this.state.selectedID}`).then((res) => {
			this.setState({
        selectedEvent: res.data
      })
		})
	}

	handleUpdateId = (e) => {
    this.setState({
      selectedID: e.target.value
    })
  }

	render() {
		return (
			<div>
				<h1>Event By ID</h1>
				<input onChange={this.handleUpdateId}/>
				<button onClick={this.handleGetEventById}>Find Event</button>
        {this.state.selectedEvent ?
        <div>
          <h3>{this.state.selectedEvent.name}</h3>
          <p>Fun Level: {this.state.selectedEvent.funLevel}</p>
        </div>
        :
        <div>Please Select Event ID</div>
        }
			</div>
		)
	}
}

export default Event
