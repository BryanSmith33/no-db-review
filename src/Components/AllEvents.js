import React, { Component } from 'react'
import axios from 'axios'

class AllEvents extends Component {
	constructor() {
		super()
		this.state = {
			events: []
		}
	}

	componentDidMount() {
		// making a request to our server to the /api/events endpoing
		// this will get all of our events
		axios.get('/api/events').then((res) => {
			this.setState({
				events: res.data
			})
		})
	}

	render() {
		// mapping over all events and creating a dynamic li for each one
		const events = this.state.events.map((event) => {
			return (
				<li key={event.id}>
					<h3>{event.name}</h3>
					<p>Fun Level: {event.funLevel}</p>
				</li>
			)
		})
		return (
			<div>
				<h1>All Events</h1>
				<ul>{events}</ul>
			</div>
		)
	}
}

export default AllEvents
