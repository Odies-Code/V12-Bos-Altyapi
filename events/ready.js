const moment = require('moment')
const
    express = require('express'),
    app = express();
moment.locale('tr')

module.exports = async(client, ready) => {
    console.log('Bot Hazır ! - ' + moment().format('MMMM Do YYYY, hh:mm:ss'))
    app.listen(3000, () => console.info(`Server started Port: 3000`));
}