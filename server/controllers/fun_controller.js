// we have our events here. We need them in our controller so we have access to them when we send back all events or a specific event/add an event.
let events = [
	{ name: 'rollerblading', funLevel: 7.5, id: 1 },
	{ name: 'ice blocking', funLevel: 8, id: 2 }
]

module.exports = {
	// sending back all events
	getAllEvents: (req, res) => {
		res.status(200).send(events)
	},
	// getting an event by a req.param.id
	getEventById: (req, res) => {
		const { id } = req.params
		const event = events.filter((event) => {
			// here we are turning our req.param.id into a number with the + sign
			// it will come back as a string from our param in the url
			return event.id === +id
		})
		// sending back event[0] because we need just the single object
		res.status(200).send(event[0])
	},
	addEvent: (req, res) => {
		// here we are making the id update dynamically by checking the last events id and adding one.
		let id = events[events.length - 1].id + 1
		const { name, funLevel } = req.body
		const newEvent = {
			name,
			funLevel,
			id
		}
		events = [...events, newEvent]
		res.status(200).send(newEvent)
	}
}
