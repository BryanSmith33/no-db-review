import React from 'react'
import './App.css'
import AllEvents from './Components/AllEvents'
import Event from './Components/Event'
import AddEvent from './Components/AddEvent'

function App() {
	return (
		<div className='App'>
      {/* using our custom component */}
			<AllEvents />
			<Event />
      <AddEvent />
		</div>
	)
}

export default App
