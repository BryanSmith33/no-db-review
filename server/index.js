const express = require('express')
const app = express()
// using a controller makes our code more maintainable
const fun_ctrl = require('./controllers/fun_controller')

app.use(express.json())

// endpoints
// the verb (get,put,post,delete) has to match to the request we are receiving from the front end
app.get('/api/events', fun_ctrl.getAllEvents)
// using a param called id
// we would then reference it as req.params.id
// whatever you call it on the endpoint is what you will call it in the req.param
app.get('/api/event/:id', fun_ctrl.getEventById)
app.post('/api/addEvent', fun_ctrl.addEvent)

const PORT = 3333
app.listen(PORT, () => console.log(`magic is happening on ${PORT}`))
