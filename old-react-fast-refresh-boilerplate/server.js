const express = require('express'), app = express(), port = 3001

app.get('/', (req, res) => {
  res.send('<p style="color: orange">Hello World!</p>')
})

app.listen(port, () => {
  // This (callback) is only run at the start of the server, and will not execute when requesting any route.
  console.log(`INFO: Express server @ http: //localhost:`, port)
})
