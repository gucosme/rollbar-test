const Rollbar = require('rollbar')
const rollbar = new Rollbar('b55927bab8554836a5f9451cbc001142')

rollbar.error(new Error('shit happened'))
